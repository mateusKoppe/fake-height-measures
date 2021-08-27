(ns fake-height-measures.core
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as rd]))

(enable-console-print!)

(defonce initial-measure {:name "Feet" :cm 30.48})
(defonce measures (atom [initial-measure
                          {:name "Meter" :cm 100}
                          {:name "Aligators" :cm 340}]))

(defn add-new-measure [data]
  (swap! measures #(conj % data)))

(defn delete-measure [measure]
  (swap! measures #(filter (fn [m] (not= m measure)) %)))

(defn measure-form []
  (let [data (atom {:name nil
                      :cm nil})]
    (fn [{:keys [on-submit]}]
      (let [handle-submit #(do (.preventDefault %)
                               (on-submit @data)
                               (reset! data {:name nil
                                             :cm nil}))]
        [:form.mt-6 {:on-submit handle-submit}
         [:div.field.has-addons.is-justify-content-center
          [:div.control>input.input
           {:placeholder "Name"
            :value (:name @data)
            :on-change (fn [e] (swap! data #(assoc % :name (-> e .-target .-value))))}]
          [:div.control>input.input
           {:type "number"
            :placeholder "CM"
            :value (:cm @data)
            :on-change (fn [e] (swap! data #(assoc % :cm (-> e .-target .-value))))}]
          [:div.control>button.button.is-primary "Add"]]]))))

(defn measure-card [{:keys [measure reference on-select on-delete]}]
  [:div.box>div.level>div.level-item.has-text-centered>div
   [:p.heading (:name measure)]
   [:p.title (.toFixed (/ (:cm reference) (:cm measure)) 2)]
   [:div.buttons.are-small
    [:button.button.is-rounded.is-outlined.mt-3
     {:on-click #(on-select measure)}
     [:i.fas.fa-eye]]
    [:button.button.is-rounded.is-outlined.is-danger.mt-3
     {:on-click #(on-delete measure)}
     [:i.fas.fa-trash]]]])

(defn size-comparator []
  (let [reference (atom initial-measure)
        change-reference #(reset! reference %)]
    (fn [{:keys [measures on-delete-measure]}]
      [:div.mt-6
       [:h2.title.is-3 (str (:name @reference) " height is:")]
       [:div.columns.is-flex-wrap-wrap
        (doall (map-indexed (fn [index measure]
               [:div.column.is-one-quarter
                {:key index}
                [measure-card {:measure measure
                              :reference @reference
                              :on-select change-reference
                              :on-delete on-delete-measure}]])
             measures))]])))

(defn app []
  [:div.container.is-max-desktop
   [:h1.title.is-1.has-text-centered.mt-5 "Imperial System in a Nutshell"]
   [measure-form {:on-submit add-new-measure}]
   [size-comparator {:measures @measures
                     :on-delete-measure delete-measure}]])

(rd/render [app]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

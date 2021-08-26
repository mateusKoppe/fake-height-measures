(ns fake-height-mesures.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rd]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce selected-metric (r/atom {:name "Feet"
                                  :cm 30.48}))

(defonce metrics (r/atom [{:name "Meter"
                           :cm 100}
                          {:name "Feet"
                           :cm 30.48}
                          {:name "Aligators"
                           :cm 340}]))

(defonce metric-form-data (r/atom {:name nil
                                   :cm :nil}))
(defn handle-new-metric-submit [e]
  (.preventDefault e)
  (reset! metrics (conj @metrics @metric-form-data))
  (reset! metric-form-data {:name nil
                            :cm nil}))

(defn new-metric-form []
  [:form.mt-6 {:on-submit handle-new-metric-submit}
   [:div.field.has-addons.is-justify-content-center
    [:div.control>input.input
     {:placeholder "Name"
      :value (:name @metric-form-data)
      :on-change #(reset! metric-form-data (assoc @metric-form-data :name (-> % .-target .-value)))}]
    [:div.control>input.input
     {:type "number"
      :placeholder "CM"
      :value (:cm @metric-form-data)
      :on-change #(reset! metric-form-data (assoc @metric-form-data :cm (-> % .-target .-value)))}]
    [:div.control>button.button.is-primary "Add"]]])

(defn metric-info [metric cm]
  [:div.box>div.level>div.level-item.has-text-centered>div
   [:p.heading (:name metric)]
   [:p.title (.toFixed (/ cm (:cm metric)) 2)]
   [:div.buttons.are-small
    [:button.button.is-rounded.is-outlined.mt-3
     {:on-click #(reset! selected-metric metric)}
     [:i.fas.fa-eye]]
    [:button.button.is-rounded.is-outlined.is-danger.mt-3
     {:on-click #(reset! metrics (filter (fn [m] (not= m metric)) @metrics))}
     [:i.fas.fa-trash]]]])

(defn size-comparator [point-of-view metrics]
  [:div.mt-6
   [:h2.title.is-3 (str (:name point-of-view) " height is:")]
   [:div.columns.is-flex-wrap-wrap
    (map (fn [metric] [:div.column.is-one-quarter {:key (:name metric)} (metric-info metric (:cm point-of-view))]) metrics)]])

(defn app []
  [:div.container.is-max-desktop
   [:h1.title.is-1.has-text-centered.mt-5 "Imperial System in a Nutsheel"]
   (new-metric-form)
   (size-comparator @selected-metric @metrics)])

(rd/render [app]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

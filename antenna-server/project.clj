(defproject antenna-server "0.1.0-SNAPSHOT"
  :description "Backend server for radio antenna coverage calculation"
  :url "https://github.com/ShevaGed/Top-map"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.12.2"]
                 [ring/ring-core "1.10.0"]
                 [ring/ring-jetty-adapter "1.10.0"]
                 [metosin/reitit "0.5.18"]]
  :main ^:skip-aot antenna-server.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})

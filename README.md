RadioWave Mapper v6.6.0 📡

RadioWave Mapper is a specialized GIS tool designed to visualize VHF/UHF radio propagation zones. Unlike simple "line-of-sight" calculators, this tool accounts for real-world terrain elevations and the Earth's curvature.
🚀 Key Features

    Terrain-Aware Coverage: Fetches real-time elevation data via Open-Elevation API.

    Atmospheric Refraction: Implements the 4/3 Earth Radius Model to simulate standard atmospheric bending of radio waves.

    Dynamic Frequency Support: Adjusts diffraction margins for VHF (170MHz) and UHF (440MHz) bands.

    Interactive GIS: Built with ClojureScript and Leaflet for a smooth, reactive mapping experience.

🔬 Mathematical Approach

The project uses a hybrid propagation model:

    Earth Curvature: Every ray calculation includes a vertical "drop" factor based on distance to account for the planet's bulge.

    Obstacle Analysis: Uses a modified Knife-edge diffraction logic where a frequency-dependent safety margin is added to the terrain height to determine signal "gray zones."

    Radio Horizon: Calculates the effective range using d≈4.12×h​, adjusted for local topography.

🛠 Tech Stack

    Frontend: ClojureScript, Shadow-cljs, Leaflet.js.

    Backend: Clojure, Ring/Jetty, Cheshire (JSON).

    Data: Open-Elevation API (SRTM data).

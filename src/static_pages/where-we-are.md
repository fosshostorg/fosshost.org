# Where We Are

---

        <div id="map"></div>

<script type="text/javascript">
            var addressPoints = [
                [45.50507, -122.68386, "Seth"],
                [47.67164, -117.24629, "Niklas"],
                [37.68239, -122.42634, "borgified"],
                [34.05138, -118.24231, "Nate"],
                [44.97029, -93.2844, "Corwin"],
                [44.97034, -93.28417, "Hope"],
                [44.74283, -85.62588, "benharri"],
                [42.35434, -71.06552, "Hammy"],
                [38.70818, -9.1368, "Bruno"],
                [51.51212, -0.1687, "Thomas"],
                [51.51703, -0.14226, "Jonathon"],
                [51.52194, -0.11685, "RhinosF1"],
                [44.81629, 20.46018, "Arsen"],
                [44.81636, 20.46035, "Nikola"],
                [19.07921, 72.87115, "Aman"],
            ];

            var tiles = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ',
                },
                (latlng = L.latLng(45.3, -13.3))
            );

            var map = L.map("map", { center: latlng, zoom: 2, layers: [tiles] });

            var markers = L.markerClusterGroup();

            for (var i = 0; i < addressPoints.length; i++) {
                var a = addressPoints[i];
                var title = a[2];
                var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
                marker.bindPopup(title);
                markers.addLayer(marker);
            }

            map.addLayer(markers);
        </script>

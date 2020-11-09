export default {
    cities: [
        {
            name: "Amsterdam",
            image: "amsterdam.jpg",
        },
        {
            name: "Bellevue",
            image: "bellevue.jpg",
        },
        {
            name: "Austin",
            image: "austin.jpg",
        },
        {
            name: "Dubuque",
            image: "dubuque.jpg",
        },
        {
            name: "Delaware",
            image: "delaware.jpg",
        },
        {
            name: "Washington County",
            image: "washington_county.jpg",
        },
        {
            name: "Atlanta",
            image: "washington_county.jpg",
        }
    ],
    city: {
        amsterdam: [
            {
                "Data Health": [
                    "Data Completeness"
                ],
                "Events": [
                    "Anomalous Days"
                ],
                "Sensor Health": [
                    "Delay",
                    "BTI"
                ],
                "Incidents": [
                    "Incidents"
                ]
            },
            {
                "Data Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/DataCompleteness?iframeSizedToWindow=true&:embed=y&:display_count=no&:showAppBanner=false&:showVizHome=no&:toolbar=no",
                "Events": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/AnomalousDays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                "Sensor Health": {
                    "Delay": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/Delay?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    "BTI": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/BTI?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                },
                "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/IncidentDetection?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
            }
        ],
        bellevue: [
            {
                "Corridor Performance": [
                    "Corridor"
                ],
                "Event Management": [
                    "Event Management"
                ],
                "Maps": [
                    "Maps"
                ],
                "Sensor Health": [
                    "Sensor Health"
                ],
                "Corridor Health": [
                    "Corridor Health"
                ],
                "Incidents": [
                    "Incidents"
                ]
            },
            {
                "Corridor Performance": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/HomeDark/TrafficManagerHome?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                "Maps": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/MapDark/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                "Event Management": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/EventDark/Event?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                "Sensor Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/SensorDark/Sensor?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no",
                "Corridor Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/CorridorDark/Corridor?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no",
                "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/incidentDark/IncidentManagement?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no"
            }
        ],
        delaware: [
            {
                "Event Days": [
                    "Affected Segments"
                ],
                "Sensor Health": [
                    "Sensor Status"
                ],
                "Delay": [
                    "Daily Slowness"
                ],
                "Incidents": [
                    "Incident Count"
                ]
            },
            {
                "Sensor Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/SensorHealth?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                "Event Days": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/EventDays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                "Delay": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/Delay?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/Incident?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no"
            }
        ]
    }
}
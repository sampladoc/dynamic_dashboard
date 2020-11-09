export default {
    cities: [
        {
            name: "amsterdam",
            image: "amsterdam.jpg",
        },
        {
            name: "bellevue",
            image: "bellevue.jpg",
        },
        {
            name: "austin",
            image: "austin.jpg",
        },
        {
            name: "dubuque",
            image: "dubuque.jpg",
        },
        {
            name: "delaware",
            image: "delaware.jpg",
        },
        {
            name: "washington County",
            image: "washington_county.jpg",
        },
        {
            name: "atlanta",
            image: "washington_county.jpg",
        }
    ],
    city: {
        amsterdam: {
            theme: 'light',
            name: 'Amsterdam',
            image: 'amsterdam.jpg',
            navs: [
                {
                    "Home": false,
                    "Data Health": true,
                    "Events": false,
                    "Sensor Health": false,
                    "Incidents": false
                },
            ],
            tabs: [
                {
                    "Home": [
                        "redirect:/"
                    ],
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
            ],
            links: [
                {
                    "Home": "redirect:/",
                    "Data Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/DataCompleteness?iframeSizedToWindow=true&:embed=y&:display_count=no&:showAppBanner=false&:showVizHome=no&:toolbar=no",
                    "Events": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/AnomalousDays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    "Sensor Health": {
                        "Delay": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/Delay?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                        "BTI": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/BTI?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    },
                    "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/NDW_Analytics/IncidentDetection?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                }
            ],
            children: [
                { id: 'Home', icon: 'Home', active: false },
                { id: 'Data Health', icon: 'Data', active: true },
                { id: 'Events', icon: 'Calendar', active: false },
                { id: 'Sensor Health', icon: 'Signal', active: false },
                { id: 'Incidents', icon: 'Road', active: false },
            ],
        },
        bellevue: {
            theme: 'dark',
            name: 'Bellevue',
            image: 'bellevue.jpg',
            navs: [
                {
                    "Home": false,
                    "Corridor Performance": true,
                    "Event Management": false,
                    "Maps": false,
                    "Sensor Health": false,
                    "Corridor Health": false,
                    "Incidents": false
                },
            ],
            tabs: [
                {
                    "Home": [
                        "redirect:/"
                    ],
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
                }
            ],
            links: [
                {
                    "Home": "redirect:/",
                    "Corridor Performance": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/HomeDark/TrafficManagerHome?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    "Maps": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/MapDark/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    "Event Management": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/EventDark/Event?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:toolbar=no",
                    "Sensor Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/SensorDark/Sensor?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no",
                    "Corridor Health": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/CorridorDark/Corridor?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no",
                    "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/incidentDark/IncidentManagement?:embed=y&:display_count=no&:showAppBanner=false&embed=y&:showVizHome=no&:toolbar=no"
                }
            ],
            children: [
                { id: 'Home', icon: 'Home', active: false },
                { id: 'Corridor Performance', icon: 'Data', active: true },
                { id: 'Maps', icon: 'Location', active: false },
                { id: 'Event Management', icon: 'Calendar', active: false },
                { id: 'Sensor Health', icon: 'Signal', active: false },
                { id: 'Corridor Health', icon: 'Signal2', active: false },
                { id: 'Incidents', icon: 'Road', active: false },
            ],
        },
        delaware: {
            theme: 'light',
            name: 'Delaware',
            image: 'delaware.jpg',
            navs: [
                {
                    "Home": false,
                    "Event Days": false,
                    "Data Completeness": true,
                    "Data Quality": false,
                    "Delay": false,
                    "Incidents": false
                },
            ],
            tabs: [
                {
                    "Home": [
                        "redirect:/"
                    ],
                    "Event Days": [
                        "Affected Segments"
                    ],
                    "Data Completeness": [
                        "Sensor Status"
                    ],
                    "Data Quality": [
                        "Sensor Data Quality"
                    ],
                    "Delay": [
                        "Daily Slowness"
                    ],
                    "Incidents": [
                        "Incident Count"
                    ]
                },
            ],
            links: [
                {
                    "Home": "redirect:/",
                    "Data Quality": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/DataQuality?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                    "Data Completeness": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/DataCompleteness?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                    "Event Days": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/EventDays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                    "Delay": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/Delay?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no",
                    "Incidents": "http://ec2-3-213-196-103.compute-1.amazonaws.com/views/Delaware-Pilot/Incident?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no:toolbar=no"
                }
            ],
            children: [
                { id: 'Home', icon: 'Home', active: false },
                { id: 'Data Completeness', icon: 'Data', active: true },
                { id: 'Data Quality', icon: 'Bar', active: true },
                { id: 'Event Days', icon: 'Calendar', active: false },
                { id: 'Delay', icon: 'Watch', active: false },
                { id: 'Incidents', icon: 'Road', active: false },
            ],
        },
    }
}

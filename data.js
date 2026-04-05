// Mock Provider Data
const mockProviders = [
    {
        id: "1",
        name: "Dr. Sarah Mitchell",
        specialty: "Family Medicine",
        rating: 4.8,
        reviewCount: 127,
        location: {
            address: "123 Main Street",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5801,
            lng: -85.0766
        },
        phone: "(770) 555-0101",
        email: "dr.mitchell@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Medicare", "Medicaid"],
        services: ["Annual Checkups", "Preventive Care", "Chronic Disease Management", "Pediatric Care", "Women's Health"],
        officeHours: {
            "Monday": "8:00 AM - 5:00 PM",
            "Tuesday": "8:00 AM - 5:00 PM",
            "Wednesday": "8:00 AM - 5:00 PM",
            "Thursday": "8:00 AM - 5:00 PM",
            "Friday": "8:00 AM - 3:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified in Family Medicine", "15+ years experience"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: true,
        acceptingPatients: true,
        reviews: [
            {
                id: "1",
                author: "John D.",
                rating: 5,
                date: "2024-03-15",
                comment: "Dr. Mitchell is thorough and caring. She takes time to listen and explain everything clearly."
            },
            {
                id: "2",
                author: "Mary S.",
                rating: 5,
                date: "2024-03-10",
                comment: "Great doctor! Very professional and knowledgeable. The office staff is friendly too."
            }
        ]
    },
    
];

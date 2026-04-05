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
    {
        id: "2",
        name: "Dr. James Rodriguez",
        specialty: "Cardiology",
        rating: 4.9,
        reviewCount: 203,
        location: {
            address: "456 Heart Lane",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5821,
            lng: -85.0786
        },
        phone: "(770) 555-0102",
        email: "dr.rodriguez@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Humana", "Medicare"],
        services: ["Heart Disease Treatment", "Cardiac Screening", "Echocardiography", "Stress Testing", "Hypertension Management"],
        officeHours: {
            "Monday": "9:00 AM - 6:00 PM",
            "Tuesday": "9:00 AM - 6:00 PM",
            "Wednesday": "9:00 AM - 6:00 PM",
            "Thursday": "9:00 AM - 6:00 PM",
            "Friday": "9:00 AM - 4:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified Cardiologist", "20+ years experience", "Fellow of the American College of Cardiology"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: true,
        acceptingPatients: true,
        reviews: [
            {
                id: "1",
                author: "Robert M.",
                rating: 5,
                date: "2024-03-12",
                comment: "Dr. Rodriguez saved my life. His expertise and care are exceptional."
            }
        ]
    },
    {
        id: "3",
        name: "Dr. Emily Chen",
        specialty: "Pediatrics",
        rating: 4.7,
        reviewCount: 156,
        location: {
            address: "789 Kids Boulevard",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5841,
            lng: -85.0806
        },
        phone: "(770) 555-0103",
        email: "dr.chen@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "PeachCare for Kids", "Medicaid"],
        services: ["Well-Child Visits", "Immunizations", "Sick Visits", "Developmental Screenings", "Newborn Care"],
        officeHours: {
            "Monday": "8:00 AM - 5:00 PM",
            "Tuesday": "8:00 AM - 5:00 PM",
            "Wednesday": "8:00 AM - 5:00 PM",
            "Thursday": "8:00 AM - 5:00 PM",
            "Friday": "8:00 AM - 12:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified Pediatrician", "10+ years experience"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: true,
        acceptingPatients: true,
        reviews: [
            {
                id: "1",
                author: "Lisa K.",
                rating: 5,
                date: "2024-03-08",
                comment: "Dr. Chen is wonderful with children. My kids actually look forward to their appointments!"
            }
        ]
    },
    {
        id: "4",
        name: "Dr. Michael Thompson",
        specialty: "Orthopedics",
        rating: 4.6,
        reviewCount: 98,
        location: {
            address: "321 Bone Street",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5861,
            lng: -85.0826
        },
        phone: "(770) 555-0104",
        email: "dr.thompson@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Medicare"],
        services: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Arthroscopy", "Physical Therapy"],
        officeHours: {
            "Monday": "7:00 AM - 4:00 PM",
            "Tuesday": "7:00 AM - 4:00 PM",
            "Wednesday": "7:00 AM - 4:00 PM",
            "Thursday": "7:00 AM - 4:00 PM",
            "Friday": "7:00 AM - 12:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified Orthopedic Surgeon", "12+ years experience"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: false,
        acceptingPatients: true,
        reviews: [
            {
                id: "1",
                author: "David P.",
                rating: 5,
                date: "2024-03-05",
                comment: "Dr. Thompson did an excellent job on my knee replacement. I'm back to running!"
            }
        ]
    },
    {
        id: "5",
        name: "Dr. Amanda Williams",
        specialty: "Dermatology",
        rating: 4.8,
        reviewCount: 174,
        location: {
            address: "654 Skin Avenue",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5881,
            lng: -85.0846
        },
        phone: "(770) 555-0105",
        email: "dr.williams@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Humana", "Medicare", "Medicaid"],
        services: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Dermatology", "Eczema Treatment", "Psoriasis Care"],
        officeHours: {
            "Monday": "9:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 5:00 PM",
            "Wednesday": "9:00 AM - 5:00 PM",
            "Thursday": "9:00 AM - 5:00 PM",
            "Friday": "9:00 AM - 3:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified Dermatologist", "8+ years experience"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: true,
        acceptingPatients: true,
        reviews: [
            {
                id: "1",
                author: "Sarah W.",
                rating: 5,
                date: "2024-03-01",
                comment: "Dr. Williams helped clear up my skin issues. She's knowledgeable and caring."
            }
        ]
    },
    {
        id: "6",
        name: "Dr. Christopher Lee",
        specialty: "Internal Medicine",
        rating: 4.9,
        reviewCount: 215,
        location: {
            address: "987 Wellness Way",
            city: "Carrollton",
            state: "GA",
            zip: "30117",
            lat: 33.5901,
            lng: -85.0866
        },
        phone: "(770) 555-0106",
        email: "dr.lee@carrolltonhealth.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
        insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana", "Medicare"],
        services: ["Diabetes Management", "Hypertension Care", "Preventive Medicine", "Health Screenings", "Chronic Disease Management"],
        officeHours: {
            "Monday": "8:00 AM - 6:00 PM",
            "Tuesday": "8:00 AM - 6:00 PM",
            "Wednesday": "8:00 AM - 6:00 PM",
            "Thursday": "8:00 AM - 6:00 PM",
            "Friday": "8:00 AM - 4:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        credentials: ["MD", "Board Certified in Internal Medicine", "18+ years experience"],
        appointmentLink: "https://example.com/schedule",
        telehealthAvailable: true,
        acceptingPatients: false,
        reviews: [
            {
                id: "1",
                author: "Thomas H.",
                rating: 5,
                date: "2024-02-28",
                comment: "Dr. Lee is incredibly thorough. He takes time to understand the full picture of your health."
            }
        ]
    }
];

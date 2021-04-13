
    
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    
    db.getCollection('users').insertMany([
    {
        "uuid" : "3ef96067-8e7a-479e-ae18-1be47f0e2a5d",
        "email" : "albert.einstein@example.com",
        "passwordHash" : "sha256|17|KOj9LS2y8IXDvo0DG8EW8A==|rduRLWmC7xAKKPAV0DHK2LQiaptQ4Xn3cWZgwuXmqMc=",
        "role" : "admin",
        "permissions" : [
            "UM_PERM",
            "ORG_PERM",
            "KM_PERM",
            "KM_UPGRADE_PERM",
            "KM_PUBLISH_PERM",
            "PM_READ_PERM",
            "PM_WRITE_PERM",
            "QTN_PERM",
            "DMP_PERM",
            "CFG_PERM",
            "SUBM_PERM",
            "TML_PERM"
        ],
        "active" : true,
        "createdAt" : ISODate("2020-06-12T14:01:20.282Z"),
        "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
        "firstName" : "Albert",
        "lastName" : "Einstein",
        "affiliation" : null,
        "sources" : [
            "internal"
        ],
        "submissionProps" : [],
        "imageUrl" : null
    },
    {
        "uuid" : "30d48cf4-8c8a-496f-bafe-585bd238f798",
        "email" : "nikola.tesla@example.com",
        "passwordHash" : "sha256|17|Nwafc2BQvbcbYdV/2m/xVQ==|Mjgj3wrtK21qIoSmz8ODiro8Yr6Upc6V27whAobIz5k=",
        "role" : "dataSteward",
        "permissions" : [
            "KM_PERM",
            "KM_UPGRADE_PERM",
            "KM_PUBLISH_PERM",
            "PM_READ_PERM",
            "QTN_PERM",
            "DMP_PERM",
            "PM_WRITE_PERM",
            "SUBM_PERM",
            "TML_PERM"
        ],
        "active" : true,
        "createdAt" : ISODate("2020-06-12T14:01:20.295Z"),
        "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
        "firstName" : "Nikola",
        "lastName" : "Tesla",
        "affiliation" : null,
        "sources" : [
            "internal"
        ],
        "submissionProps" : [],
        "imageUrl" : null
    },
    {
        "uuid" : "e1c58e52-0824-4526-8ebe-ec38eec67030",
        "email" : "isaac.newton@example.com",
        "passwordHash" : "sha256|17|lWASjBQx215ktNe7mjaWHg==|btUAw+oFeBVR9bDXmoVGLMSIrGOjbs+CxC6SR7FqouQ=",
        "role" : "researcher",
        "permissions" : [
            "PM_READ_PERM",
            "QTN_PERM",
            "DMP_PERM",
            "SUBM_PERM"
        ],
        "active" : true,
        "createdAt" : ISODate("2020-06-12T14:01:20.297Z"),
        "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
        "firstName" : "Isaac",
        "lastName" : "Newton",
        "affiliation" : null,
        "sources" : [
            "internal"
        ],
        "submissionProps" : [],
        "imageUrl" : null
    }
    ])
    
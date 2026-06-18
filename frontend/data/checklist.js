const exams = [

{
    id:1,
    name:"UP Police SI",
    icon:"👮",
    subjects:{
        Reasoning:{

    MentalAbility:[

        "Logical Diagrams | तार्किक आरेख",
        "Symbol Relationship | प्रतीकात्मक संबंध",
        "Interpretation and Perception Test | व्याख्या एवं धारणा परीक्षण",
        "Word Formation Test | शब्द निर्माण परीक्षण",
        "Letter and Number Series | अक्षर एवं संख्या श्रेणी",
        "Word and Alphabet Analogy | शब्द एवं वर्णमाला समानता",
        "Common Sense and Practical Knowledge | सामान्य बुद्धि परीक्षण (व्यावहारिक ज्ञान)",
        "Direction Test | दिशा परीक्षण",
        "Logical Interpretation of Data | डेटा की तार्किक व्याख्या",
        "Forcefulness of Argument | तर्क की प्रभावशीलता",
        "Determining Implied Meanings | निहित अर्थों का निर्धारण"

    ],

    ReasoningAbility:[

        "Relationship and Analogy | संबंध एवं समानता",
        "Odd One Out | असमान वस्तु की पहचान",
        "Series Completion | श्रृंखला पूर्ण करना",
        "Coding and Decoding | कूटलेखन एवं कूटवाचन",
        "Direction Sense Test | दिशा बोध परीक्षण",
        "Blood Relation | रक्त संबंध",
        "Alphabet Problems | वर्णमाला आधारित प्रश्न",
        "Venn Diagram | वेन आरेख",
        "Chart Based Test | चार्ट आधारित प्रश्न",
        "Mathematical Ability | गणितीय क्षमता",
        "Analogies | उपमा",
        "Similarities | समानताएँ",
        "Differences | भिन्नताएँ",
        "Space Visualization | स्थानिक कल्पना",
        "Problem Solving | समस्या समाधान",
        "Analysis and Judgement | विश्लेषण एवं निर्णय क्षमता",
        "Decision Making | निर्णय लेना",
        "Visual Memory | दृश्य स्मृति",
        "Discrimination | विभेदन क्षमता",
        "Observation | अवलोकन क्षमता",
        "Concept Formation | अवधारणा निर्माण",
        "Arithmetical Reasoning | अंकगणितीय तर्क",
        "Verbal Classification | मौखिक वर्गीकरण",
        "Figure Classification | आकृति वर्गीकरण",
        "Arithmetical Number Series | अंकगणितीय संख्या श्रेणी",
        "Abstract Ideas and Symbol Relationship | अमूर्त विचार एवं प्रतीक संबंध"

    ],

    AdvancedReasoning:[

        "Seating Arrangement | बैठक व्यवस्था",
        "Linear Arrangement | रेखीय व्यवस्था",
        "Circular Arrangement | वृत्ताकार व्यवस्था",
        "Puzzle Test | पहेली परीक्षण",
        "Ranking Test | क्रम एवं रैंकिंग",
        "Order and Ranking | क्रम निर्धारण",
        "Syllogism | न्यायवाक्य",
        "Statement and Conclusion | कथन एवं निष्कर्ष",
        "Statement and Assumption | कथन एवं धारणा",
        "Statement and Argument | कथन एवं तर्क",
        "Cause and Effect | कारण एवं प्रभाव",
        "Assertion and Reason | कथन एवं कारण",
        "Decision Making Problems | निर्णय आधारित प्रश्न",
        "Data Sufficiency | डेटा पर्याप्तता",
        "Input Output | इनपुट आउटपुट",
        "Logical Sequence of Words | शब्दों का तार्किक क्रम",
        "Logical Sequence of Events | घटनाओं का तार्किक क्रम",
        "Inequality | असमानता",
        "Coded Inequality | कूटित असमानता"
    ],

    NonVerbalReasoning:[

        "Mirror Image | दर्पण प्रतिबिंब",
        "Water Image | जल प्रतिबिंब",
        "Paper Folding | कागज मोड़ना",
        "Paper Cutting | कागज काटना",
        "Embedded Figures | अंतर्निहित आकृतियाँ",
        "Completion of Figure | आकृति पूर्ण करना",
        "Figure Series | आकृति श्रेणी",
        "Figure Analogy | आकृति समानता",
        "Pattern Completion | प्रतिरूप पूर्ण करना",
        "Cubes and Dice | घन एवं पासा",
        "Counting Figures | आकृतियों की गणना",
        "Hidden Figures | छिपी हुई आकृतियाँ"
    ]

},

        GK:{

    GeneralScience:[

        "Physics | भौतिक विज्ञान",
        "Chemistry | रसायन विज्ञान",
        "Biology | जीव विज्ञान",
        "Human Body | मानव शरीर",
        "Diseases and Nutrition | रोग एवं पोषण",
        "Scientific Instruments | वैज्ञानिक उपकरण",
        "Inventions and Discoveries | आविष्कार एवं खोज",
        "Computer Awareness | कंप्यूटर जागरूकता"

    ],

    History:[

        "Ancient Indian History | प्राचीन भारतीय इतिहास",
        "Medieval Indian History | मध्यकालीन भारतीय इतिहास",
        "Modern Indian History | आधुनिक भारतीय इतिहास",
        "Indian National Movement | भारतीय राष्ट्रीय आंदोलन",
        "Freedom Struggle | स्वतंत्रता संग्राम"

    ],

    Geography:[

        "Indian Geography | भारत का भूगोल",
        "World Geography | विश्व भूगोल",
        "Rivers of India | भारत की नदियाँ",
        "Mountains and Plateaus | पर्वत एवं पठार",
        "Climate | जलवायु",
        "Soil and Agriculture | मृदा एवं कृषि",
        "Natural Resources | प्राकृतिक संसाधन"

    ],

    IndianPolity:[

        "Indian Constitution | भारतीय संविधान",
        "Preamble | प्रस्तावना",
        "Fundamental Rights | मौलिक अधिकार",
        "Fundamental Duties | मौलिक कर्तव्य",
        "Directive Principles | राज्य के नीति निदेशक तत्व",
        "Parliament | संसद",
        "President | राष्ट्रपति",
        "Prime Minister | प्रधानमंत्री",
        "Supreme Court | सर्वोच्च न्यायालय",
        "High Court | उच्च न्यायालय",
        "Election Commission | निर्वाचन आयोग",
        "Constitutional Bodies | संवैधानिक संस्थाएँ"

    ],

    Economy:[

        "Indian Economy | भारतीय अर्थव्यवस्था",
        "Banking System | बैंकिंग प्रणाली",
        "Budget | बजट",
        "Planning in India | भारत में नियोजन",
        "Tax System | कर प्रणाली",
        "GST | वस्तु एवं सेवा कर (GST)",
        "Demonetization | नोटबंदी",
        "Commerce and Trade | वाणिज्य एवं व्यापार"

    ],

    UttarPradeshSpecial:[

        "History of Uttar Pradesh | उत्तर प्रदेश का इतिहास",
        "Geography of Uttar Pradesh | उत्तर प्रदेश का भूगोल",
        "Culture of Uttar Pradesh | उत्तर प्रदेश की संस्कृति",
        "Festivals of Uttar Pradesh | उत्तर प्रदेश के त्यौहार",
        "Social Traditions of Uttar Pradesh | उत्तर प्रदेश की सामाजिक परम्पराएँ",
        "Revenue System of Uttar Pradesh | उत्तर प्रदेश की राजस्व व्यवस्था",
        "Police Administration of Uttar Pradesh | उत्तर प्रदेश की पुलिस व्यवस्था",
        "General Administration of Uttar Pradesh | उत्तर प्रदेश की सामान्य प्रशासनिक व्यवस्था"

    ],

    CurrentAffairs:[

        "National Current Affairs | राष्ट्रीय समसामयिकी",
        "International Current Affairs | अंतर्राष्ट्रीय समसामयिकी",
        "Sports | खेल",
        "Awards and Honours | पुरस्कार एवं सम्मान",
        "Books and Authors | पुस्तकें एवं लेखक",
        "Important Days | महत्वपूर्ण दिवस",
        "National and International Organizations | राष्ट्रीय एवं अंतर्राष्ट्रीय संगठन",
        "Countries Capitals and Currencies | देश, राजधानी एवं मुद्राएँ"

    ],

    SecurityAndAwareness:[

        "Human Rights | मानव अधिकार",
        "Internal Security | आंतरिक सुरक्षा",
        "Terrorism | आतंकवाद",
        "Cyber Crime | साइबर अपराध",
        "Social Media Communication | सोशल मीडिया संचार",
        "India and Neighbouring Countries Relations | भारत एवं पड़ोसी देशों के संबंध"

    ],

    Miscellaneous:[

        "Population | जनसंख्या",
        "Environment and Urbanization | पर्यावरण एवं नगरीकरण",
        "Education | शिक्षा",
        "Research and Discoveries | अनुसंधान एवं खोज"

    ]

},

       Hindi:{

    LanguageAndGrammar:[

        "Hindi and Other Indian Languages | हिंदी एवं अन्य भारतीय भाषाएँ",
        "Hindi Grammar Basics | हिंदी व्याकरण का सामान्य ज्ञान",
        "Hindi Alphabet | हिंदी वर्णमाला",
        "Noun | संज्ञा",
        "Pronoun | सर्वनाम",
        "Adjective | विशेषण",
        "Verb | क्रिया",
        "Causative Verb | प्रेरणार्थक क्रिया",
        "Gender | लिंग",
        "Tense | काल",
        "Indeclinables (Avyay) | अव्यय",
        "Prefix and Suffix | उपसर्ग एवं प्रत्यय",
        "Conjunction | समुच्चयबोधक अव्यय",
        "Punctuation Marks | विराम चिह्न"

    ],

    Vocabulary:[

        "Synonyms | पर्यायवाची शब्द",
        "Antonyms | विलोम शब्द",
        "Multiple Meaning Words | अनेकार्थी शब्द",
        "One Word Substitution | एक शब्द के लिए वाक्यांश",
        "Word Usage | शब्द प्रयोग"

    ],

    SentenceCorrection:[

        "Sentence Correction | अशुद्ध वाक्यों का शुद्धिकरण",
        "Error Detection | त्रुटि पहचान",
        "Sentence Formation | वाक्य निर्माण",
        "Sentence Transformation | वाक्य रूपांतरण"

    ],

    IdiomsAndProverbs:[

        "Idioms | मुहावरे",
        "Proverbs | लोकोक्तियाँ"

    ],

    Literature:[

        "Poetry (Chhand) | छंद",
        "Figures of Speech (Alankar) | अलंकार",
        "Famous Poets | प्रसिद्ध कवि",
        "Authors and Their Famous Works | लेखक एवं उनकी प्रसिद्ध कृतियाँ",
        "Hindi Language Awards | हिंदी भाषा पुरस्कार"

    ],

    Comprehension:[

        "Reading Comprehension | अपठित गद्यांश",
        "Passage Based Questions | गद्यांश आधारित प्रश्न"

    ]

},

        Math:{

    NumberSystem:[

        "Number System | संख्या पद्धति",
        "Simplification | सरलीकरण",
        "Decimal and Fraction | दशमलव एवं भिन्न",
        "HCF and LCM | महत्तम समापवर्तक (HCF) एवं लघुत्तम समापवर्त्य (LCM)"

    ],

    RatioPercentage:[

        "Ratio and Proportion | अनुपात एवं समानुपात",
        "Percentage | प्रतिशत",
        "Average | औसत",
        "Partnership | साझेदारी"

    ],

    ProfitAndInterest:[

        "Profit and Loss | लाभ एवं हानि",
        "Discount | छूट",
        "Simple Interest | साधारण ब्याज",
        "Compound Interest | चक्रवृद्धि ब्याज"

    ],

    TimeWorkDistance:[

        "Time and Work | समय एवं कार्य",
        "Work and Wages | कार्य एवं मजदूरी",
        "Pipes and Cisterns | पाइप एवं टंकी",
        "Time and Distance | समय एवं दूरी",
        "Train Problems | रेलगाड़ी आधारित प्रश्न",
        "Boat and Stream | नाव एवं धारा"

    ],

    Mensuration:[

        "Mensuration 2D | समतल क्षेत्रमिति",
        "Mensuration 3D | ठोस क्षेत्रमिति",
        "Area and Perimeter | क्षेत्रफल एवं परिमाप",
        "Volume and Surface Area | आयतन एवं पृष्ठीय क्षेत्रफल"

    ],

    DataInterpretation:[

        "Tables | सारणी आधारित प्रश्न",
        "Bar Graph | बार ग्राफ",
        "Line Graph | रेखा ग्राफ",
        "Pie Chart | पाई चार्ट",
        "Data Interpretation | डेटा व्याख्या"

    ],

    AlgebraAndFunctions:[

        "Algebra Basics | बीजगणित की मूल अवधारणाएँ",
        "Linear Equations | रैखिक समीकरण",
        "Quadratic Equations | द्विघात समीकरण",
        "Analytical Functions | विश्लेषणात्मक फलन"

    ],

    ArithmeticReasoning:[

        "Arithmetical Computations | अंकगणितीय गणनाएँ",
        "Mathematical Operations | गणितीय संक्रियाएँ",
        "Number Series | संख्या श्रेणी",
        "Missing Numbers | लुप्त संख्या"

    ],

    Miscellaneous:[

        "Mixture and Allegation | मिश्रण एवं आरोपण",
        "Age Problems | आयु आधारित प्रश्न",
        "Calendar | कैलेंडर",
        "Clock | घड़ी",
        "Miscellaneous Problems | विविध प्रश्न"

    ]

}
    }
},

{
    id:2,
    name:"UP Police Constable",
    icon:"🚔",
    subjects:{
  Reasoning:{

    MentalAbility:[

        "Logical Diagrams | तार्किक आरेख",
        "Symbol Relationship | प्रतीकात्मक संबंध",
        "Interpretation and Perception Test | व्याख्या एवं धारणा परीक्षण",
        "Word Formation Test | शब्द निर्माण परीक्षण",
        "Letter and Number Series | अक्षर एवं संख्या श्रेणी",
        "Word and Alphabet Analogy | शब्द एवं वर्णमाला समानता",
        "Common Sense and Practical Knowledge | सामान्य बुद्धि परीक्षण (व्यावहारिक ज्ञान)",
        "Direction Test | दिशा परीक्षण",
        "Logical Interpretation of Data | डेटा की तार्किक व्याख्या",
        "Forcefulness of Argument | तर्क की प्रभावशीलता",
        "Determining Implied Meanings | निहित अर्थों का निर्धारण"

    ],

    ReasoningAbility:[

        "Relationship and Analogy | संबंध एवं समानता",
        "Odd One Out | असमान वस्तु की पहचान",
        "Series Completion | श्रृंखला पूर्ण करना",
        "Coding and Decoding | कोडिंग–डिकोडिंग परीक्षण",
        "Direction Sense Test | दिशा बोध परीक्षण",
        "Blood Relation | रक्त संबंध",
        "Alphabet Problems | वर्णमाला पर आधारित प्रश्न",
        "Venn Diagram and Chart Test | वेन आरेख एवं चार्ट आधारित प्रश्न",
        "Mathematical Ability | गणितीय क्षमता",
        "Analogies | उपमा (एनालॉजी)",
        "Similarities | समानताएँ",
        "Differences | अंतर / भिन्नताएँ",
        "Space Visualization | स्थानिक कल्पना",
        "Problem Solving | समस्या समाधान",
        "Analysis and Judgement | विश्लेषण एवं निर्णय क्षमता",
        "Decision Making | निर्णय लेना",
        "Visual Memory | दृश्य स्मृति",
        "Discrimination | विभेदन क्षमता",
        "Observation | अवलोकन",
        "Relationship | संबंध",
        "Concepts | अवधारणाएँ",
        "Arithmetical Reasoning | अंकगणितीय तर्क",
        "Verbal and Figure Classification | मौखिक एवं आकृति वर्गीकरण",
        "Arithmetical Number Series | अंकगणितीय संख्या श्रेणी",
        "Abstract Ideas and Symbol Relationships | अमूर्त विचारों एवं प्रतीकों के संबंध को समझने की क्षमता"

    ]

},

        GK:[
"General Science | सामान्य विज्ञान",
"Indian History | भारतीय इतिहास",
"Indian Constitution | भारतीय संविधान",
"Indian Economy and Culture | भारतीय अर्थव्यवस्था एवं संस्कृति",
"Indian Agriculture | भारतीय कृषि",
"Commerce and Trade | वाणिज्य एवं व्यापार",
"Population | जनसंख्या",
"Environment and Urbanization | पर्यावरण एवं नगरीकरण",
"Indian Geography and World Geography | भारत का भूगोल एवं विश्व भूगोल",
"Natural Resources | प्राकृतिक संसाधन",
"Education | शिक्षा",
"Culture and Social Traditions of Uttar Pradesh | उत्तर प्रदेश की संस्कृति एवं सामाजिक परम्पराएँ",
"Revenue, Police and General Administration of Uttar Pradesh | उत्तर प्रदेश का राजस्व, पुलिस एवं सामान्य प्रशासनिक व्यवस्था",
"Human Rights | मानव अधिकार",
"Internal Security and Terrorism | आंतरिक सुरक्षा एवं आतंकवाद",
"India and Its Relations with Neighboring Countries | भारत और उसके पड़ोसी देशों के संबंध",
"National and International Organizations | राष्ट्रीय एवं अंतर्राष्ट्रीय संगठन",
"International Importance Events | अंतर्राष्ट्रीय महत्व की घटनाएँ",
"Demonetization and Important Days | नोटबंदी एवं उससे जुड़े महत्वपूर्ण दिन",
"Cyber Crime | साइबर अपराध",
"Goods and Services Tax (GST) | वस्तु एवं सेवा कर (GST)",
"Awards and Honours | पुरस्कार एवं सम्मान",
"Countries Capitals and Currencies | देश, राजधानियाँ एवं मुद्राएँ",
"Important Days | महत्वपूर्ण दिवस",
"Research and Discoveries | अनुसंधान एवं खोज",
"Books and Authors | पुस्तकें एवं उनके लेखक",
"Social Media Communication | सोशल मीडिया संचार"
],

        Math:[
"Number System | संख्या पद्धति",
"Simplification | सरलीकरण",
"Decimal and Fraction | दशमलव एवं भिन्न",
"HCF and LCM | महत्तम समापवर्तक (HCF) एवं लघुत्तम समापवर्त्य (LCM)",
"Ratio and Proportion | अनुपात एवं समानुपात",
"Percentage | प्रतिशत",
"Profit and Loss | लाभ एवं हानि",
"Discount | छूट",
"Simple Interest | साधारण ब्याज",
"Compound Interest | चक्रवृद्धि ब्याज",
"Partnership | साझेदारी",
"Time and Work | समय एवं कार्य",
"Average | औसत",
"Time and Distance | समय एवं दूरी",
"Tables and Graphs | तालिका एवं ग्राफ का उपयोग",
"Mensuration | क्षेत्रमिति",
"Arithmetical Computations | अंकगणितीय गणनाएँ",
"Analytical Functions | विश्लेषणात्मक फलन",
"Miscellaneous | विविध"
]
,
        Hindi:[
"Hindi and Other Indian Languages | हिंदी एवं अन्य भारतीय भाषाएँ",
"Basic Knowledge of Hindi Grammar | हिंदी व्याकरण का सामान्य ज्ञान",
"Hindi Alphabet | हिंदी वर्णमाला",
"Synonyms | पर्यायवाची शब्द",
"Antonyms | विलोम शब्द",
"Multiple Meaning Words | अनेकार्थी शब्द",
"One Word Substitution | एक शब्द के लिए वाक्यांश",
"Sentence Correction | अशुद्ध वाक्यों का शुद्धिकरण",
"Gender | लिंग",
"Noun | संज्ञा",
"Pronoun | सर्वनाम",
"Adjective | विशेषण",
"Verb | क्रिया",
"Causative Verb | प्रेरणार्थक क्रिया",
"Tense | काल",
"Indeclinables (Avyay) | अव्यय",
"Prefix and Suffix | उपसर्ग एवं प्रत्यय",
"Conjunction | समुच्चयबोधक अव्यय",
"Punctuation Marks | विराम चिह्न",
"Idioms and Proverbs | मुहावरे एवं लोकोक्तियाँ",
"Poetry (Chhand) | छंद",
"Figures of Speech (Alankar) | अलंकार",
"Reading Comprehension | अपठित गद्यांश",
"Famous Poets | प्रसिद्ध कवि",
"Authors and Their Famous Works | लेखक एवं उनकी प्रसिद्ध कृतियाँ",
"Hindi Language Awards | हिंदी भाषा पुरस्कार"
]

    }
},

{
    id:3,
name:"SSC CGL",
icon:"📋",

subjects:{

    Reasoning:{

        VerbalReasoning:[

            "Analogy",
            "Classification",
            "Series",
            "Coding and Decoding",
            "Blood Relation",
            "Direction Sense Test",
            "Order and Ranking",
            "Alphabet Test",
            "Mathematical Operations",
            "Number Series",
            "Word Formation",
            "Logical Sequence of Words",
            "Logical Sequence of Events",
            "Data Sufficiency",
            "Statement and Conclusion",
            "Statement and Assumption",
            "Statement and Argument",
            "Cause and Effect",
            "Decision Making",
            "Syllogism",
            "Puzzle",
            "Seating Arrangement",
            "Inequality"
        ],

        NonVerbalReasoning:[

            "Mirror Image",
            "Water Image",
            "Paper Folding",
            "Paper Cutting",
            "Embedded Figures",
            "Figure Analogy",
            "Figure Classification",
            "Pattern Completion",
            "Series of Figures",
            "Counting Figures",
            "Cubes and Dice"
        ]

    },

    English:{

        Vocabulary:[

            "Synonyms",
            "Antonyms",
            "One Word Substitution",
            "Idioms and Phrases",
            "Spelling Correction",
            "Vocabulary Usage"
        ],

        Grammar:[

            "Error Detection",
            "Sentence Improvement",
            "Fill in the Blanks",
            "Active Passive Voice",
            "Direct Indirect Speech",
            "Subject Verb Agreement",
            "Articles",
            "Prepositions",
            "Conjunctions",
            "Tenses"
        ],

        Comprehension:[

            "Reading Comprehension",
            "Cloze Test",
            "Para Jumble",
            "Sentence Rearrangement"
        ]

    },

    Quant:{

        Arithmetic:[

            "Number System",
            "Simplification",
            "HCF and LCM",
            "Decimal and Fraction",
            "Ratio and Proportion",
            "Percentage",
            "Average",
            "Profit and Loss",
            "Discount",
            "Simple Interest",
            "Compound Interest",
            "Partnership",
            "Mixture and Alligation",
            "Time and Work",
            "Pipes and Cistern",
            "Time Speed Distance",
            "Train Problems",
            "Boat and Stream",
            "Age Problems"
        ],

        AdvancedMath:[

            "Algebra",
            "Linear Equations",
            "Quadratic Equations",
            "Geometry",
            "Triangle",
            "Circle",
            "Mensuration 2D",
            "Mensuration 3D",
            "Trigonometry",
            "Height and Distance",
            "Coordinate Geometry"
        ],

        DataInterpretation:[

            "Table",
            "Bar Graph",
            "Line Graph",
            "Pie Chart",
            "Data Interpretation"
        ],

        StatisticsProbability:[

            "Statistics",
            "Probability"
        ]

    },

    GK:{

        History:[

            "Ancient History",
            "Medieval History",
            "Modern History",
            "Freedom Movement"
        ],

        Geography:[

            "Indian Geography",
            "World Geography",
            "Physical Geography",
            "Climate",
            "Rivers",
            "Soils"
        ],

        Polity:[

            "Constitution",
            "Fundamental Rights",
            "Fundamental Duties",
            "Parliament",
            "President",
            "Prime Minister",
            "Judiciary",
            "Constitutional Bodies"
        ],

        Economy:[

            "Indian Economy",
            "Banking",
            "Budget",
            "Taxation",
            "GST",
            "Economic Reforms"
        ],

        Science:[

            "Physics",
            "Chemistry",
            "Biology",
            "Scientific Instruments",
            "Inventions and Discoveries"
        ],

        Environment:[

            "Ecology",
            "Biodiversity",
            "Climate Change",
            "Environmental Issues"
        ],

        CurrentAffairs:[

            "National Current Affairs",
            "International Current Affairs",
            "Awards and Honours",
            "Books and Authors",
            "Sports",
            "Important Days",
            "Organizations",
            "Countries Capitals Currencies"
        ],

        ArtAndCulture:[

            "Indian Art",
            "Dance Forms",
            "Music",
            "Architecture",
            "UNESCO Heritage Sites"
        ]

    },

    Computer:{

        Fundamentals:[

            "Computer Basics",
            "History of Computer",
            "Generations of Computer",
            "Input Output Devices"
        ],

        HardwareSoftware:[

            "Hardware",
            "Software",
            "Operating System",
            "Memory Devices"
        ],

        MSOffice:[

            "MS Word",
            "MS Excel",
            "MS PowerPoint",
            "MS Access"
        ],

        InternetNetworking:[

            "Internet",
            "Email",
            "Web Browser",
            "Networking",
            "Network Devices",
            "Protocols"
        ],

        Security:[

            "Cyber Security",
            "Computer Virus",
            "Malware",
            "Data Protection"
        ]

    }

}
},
{
    id:4,
    name:"SSC CHSL",
    icon:"📄",
    subjects:{
        Reasoning:[
            "Analogy",
            "Series",
            "Coding Decoding",
            "Blood Relation",
            "Puzzle",
            "Direction Test",
            "Mirror Image"
        ],

        English:[
            "Grammar",
            "Vocabulary",
            "Reading Comprehension",
            "Error Detection",
            "Cloze Test",
            "Idioms"
        ],

        Quant:[
            "Percentage",
            "Ratio",
            "Average",
            "Profit Loss",
            "SI CI",
            "Time Work",
            "Time Distance",
            "Mensuration",
            "DI"
        ],

        GK:[
            "History",
            "Geography",
            "Polity",
            "Science",
            "Current Affairs"
        ]
    }
},

{
    id:5,
name:"SSC CPO",
icon:"🛡️",

subjects:{

    Reasoning:{

        VerbalReasoning:[

            "Analogy",
            "Classification",
            "Series",
            "Coding and Decoding",
            "Blood Relation",
            "Direction Sense Test",
            "Alphabet Test",
            "Number Series",
            "Order and Ranking",
            "Logical Sequence of Words",
            "Logical Sequence of Events",
            "Mathematical Operations",
            "Data Sufficiency",
            "Statement and Conclusion",
            "Statement and Assumption",
            "Statement and Argument",
            "Cause and Effect",
            "Decision Making",
            "Syllogism",
            "Puzzle",
            "Seating Arrangement",
            "Inequality"
        ],

        NonVerbalReasoning:[

            "Mirror Image",
            "Water Image",
            "Paper Folding",
            "Paper Cutting",
            "Embedded Figures",
            "Figure Analogy",
            "Figure Classification",
            "Pattern Completion",
            "Figure Series",
            "Counting Figures",
            "Cubes and Dice"
        ]

    },

    English:{

        Vocabulary:[

            "Synonyms",
            "Antonyms",
            "One Word Substitution",
            "Idioms and Phrases",
            "Spelling Correction",
            "Vocabulary Usage"
        ],

        Grammar:[

            "Error Detection",
            "Sentence Improvement",
            "Fill in the Blanks",
            "Active Passive Voice",
            "Direct Indirect Speech",
            "Subject Verb Agreement",
            "Articles",
            "Prepositions",
            "Conjunctions",
            "Tenses"
        ],

        Comprehension:[

            "Reading Comprehension",
            "Cloze Test",
            "Para Jumble",
            "Sentence Rearrangement"
        ]

    },

    Quant:{

        Arithmetic:[

            "Number System",
            "Simplification",
            "HCF and LCM",
            "Decimal and Fraction",
            "Ratio and Proportion",
            "Percentage",
            "Average",
            "Profit and Loss",
            "Discount",
            "Simple Interest",
            "Compound Interest",
            "Partnership",
            "Mixture and Alligation",
            "Time and Work",
            "Pipes and Cistern",
            "Time Speed Distance",
            "Train Problems",
            "Boat and Stream",
            "Age Problems"
        ],

        AdvancedMath:[

            "Algebra",
            "Linear Equations",
            "Quadratic Equations",
            "Geometry",
            "Triangle",
            "Circle",
            "Mensuration 2D",
            "Mensuration 3D",
            "Trigonometry",
            "Height and Distance",
            "Coordinate Geometry"
        ],

        DataInterpretation:[

            "Table",
            "Bar Graph",
            "Line Graph",
            "Pie Chart",
            "Data Interpretation"
        ],

        StatisticsProbability:[

            "Statistics",
            "Probability"
        ]

    },

    GK:{

        History:[

            "Ancient History",
            "Medieval History",
            "Modern History",
            "Indian Freedom Movement"
        ],

        Geography:[

            "Indian Geography",
            "World Geography",
            "Physical Geography",
            "Climate",
            "Rivers",
            "Soils"
        ],

        Polity:[

            "Indian Constitution",
            "Fundamental Rights",
            "Fundamental Duties",
            "Parliament",
            "President",
            "Prime Minister",
            "Judiciary",
            "Constitutional Bodies"
        ],

        Economy:[

            "Indian Economy",
            "Banking",
            "Budget",
            "Taxation",
            "GST",
            "Economic Reforms"
        ],

        Science:[

            "Physics",
            "Chemistry",
            "Biology",
            "Scientific Instruments",
            "Inventions and Discoveries"
        ],

        CurrentAffairs:[

            "National Current Affairs",
            "International Current Affairs",
            "Awards and Honours",
            "Books and Authors",
            "Sports",
            "Important Days",
            "Organizations",
            "Countries Capitals and Currencies"
        ],

        Environment:[

            "Ecology",
            "Biodiversity",
            "Climate Change",
            "Environmental Issues"
        ]

    }

}
},

{
    id:6,
    name:"Banking",
    icon:"🏦",
    subjects:{
        Reasoning:[
            "Puzzle",
            "Seating Arrangement",
            "Blood Relation",
            "Direction Test",
            "Coding Decoding",
            "Inequality",
            "Syllogism"
        ],

        English:[
            "Reading Comprehension",
            "Cloze Test",
            "Vocabulary",
            "Grammar",
            "Para Jumble"
        ],

        Quant:[
            "Simplification",
            "Approximation",
            "Percentage",
            "Ratio",
            "Average",
            "DI",
            "Profit Loss",
            "Time Work"
        ],

        BankingAwareness:[
            "Banking Terms",
            "RBI",
            "Monetary Policy",
            "Current Affairs",
            "Financial Awareness"
        ]
    }
},

{
    id:7,
    name:"Railway",
    icon:"🚆",
    subjects:{
        Math:[
            "Percentage",
            "Ratio",
            "Average",
            "Profit Loss",
            "SI CI",
            "Time Work",
            "Time Distance"
        ],

        Reasoning:[
            "Analogy",
            "Series",
            "Coding Decoding",
            "Puzzle",
            "Blood Relation"
        ],

        GK:[
            "History",
            "Geography",
            "Polity",
            "Science",
            "Current Affairs"
        ]
    }
},

{
    id:8,
    name:"Delhi Police",
    icon:"🚓",
    subjects:{
        Reasoning:[
            "Analogy",
            "Series",
            "Coding Decoding",
            "Blood Relation",
            "Direction Test",
            "Puzzle"
        ],

        GK:[
            "History",
            "Geography",
            "Polity",
            "Current Affairs",
            "Science"
        ],

        Math:[
            "Percentage",
            "Ratio",
            "Average",
            "Profit Loss",
            "Time Distance",
            "Time Work"
        ]
    }
}

];
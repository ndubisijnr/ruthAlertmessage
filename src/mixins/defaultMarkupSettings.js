export default {
    formData: {
        Air: {
            general: [
                // name
                {
                    postVal: "name",
                    label: "Name",
                    id: "general_name",
                    required: true,
                    val: "",
                    inputType: {
                        structure: "input",
                        type: "text",
                    },
                },
                // markup_type
                {
                    postVal: "markup_type",
                    label: "Markup Type",
                    id: "general_markup_type",
                    required: true,
                    val: "discount",
                    inputType: {
                        structure: "select",
                        type: "single",
                        openVal: false,
                        options: [
                            "discount",
                            "markup",
                            "service_fee",
                            "promotional_discount",
                        ],
                    },
                },
                // markup_value
                {
                    postVal: "markup_value",
                    label: "Markup Account",
                    id: "general_markup_account",
                    required: true,
                    val: 0,
                    inputType: {
                        structure: "input",
                        type: "number",
                    },
                },
                // amount_type
                {
                    postVal: "amount_type",
                    label: "Amount Type",
                    id: "general_amount_type",
                    required: true,
                    val: "fixed",
                    break: true,
                    inputType: {
                        structure: "select",
                        type: "single",
                        openVal: false,
                        options: ["fixed", "percentage"],
                    },
                },
                // apply_markup_at
                {
                    postVal: "apply_markup_at",
                    label: "Apply markup at:",
                    id: "general_apply_markup_at",
                    required: false,
                    showReq: true,
                    val: [],
                    inputType: {
                        structure: "select",
                        type: "multiple",
                        openVal: false,
                        options: [
                            "booking",
                            "exchange",
                            "refund",
                        ],
                    },
                },
                // fare_type
                {
                    postVal: "fare_type",
                    label: "Fare Type:",
                    id: "general_fare_type",
                    required: false,
                    showReq: true,
                    val: [],
                    inputType: {
                        structure: "select",
                        type: "multiple",
                        openVal: false,
                        options: [
                            "corporate",
                            "published",
                            "private",
                        ],
                    },
                },
                // passenger_type
                {
                    postVal: "passenger_type",
                    label: "Passenger Type:",
                    id: "general_passenger_type",
                    required: false,
                    showReq: true,
                    val: [],
                    inputType: {
                        structure: "select",
                        type: "multiple",
                        openVal: false,
                        options: ["adult", "child", "infant"],
                    },
                },
            ],
            rule: {
                0: [
                    // marketing_carriers
                    {
                        postVal: "marketing_carriers",
                        label: "Marketing Carriers",
                        id: "rule_mark_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                        },
                    },
                    // affiliate_carriers
                    {
                        postVal: "affiliate_carriers",
                        label: "Affiliate Carriers",
                        id: "rule_aff_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                            options: ["All", "All", "All"],
                        },
                    },
                    // operating_carriers
                    {
                        postVal: "operating_carriers",
                        label: "Operating Carriers",
                        id: "rule_ope_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                            options: ["All", "All", "All"],
                        },
                    },
                    // providers
                    {
                        postVal: "providers",
                        label: "Air Providers",
                        id: "rule_air_p",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: ["amadeus", "tiqwa"],
                        },
                    },
                    // code_share_flights_type
                    {
                        postVal: "code_share_flights_type",
                        label: "Code share flights type:",
                        id: "rule_code_share",
                        required: false,
                        val: [],
                        break: true,
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "all",
                                "equal_marketing_&_operation_carries",
                                "different_marketing_&_operation_carries",
                            ],
                        },
                    },
                    // fare_basic_code
                    {
                        postVal: "fare_basic_code",
                        label: "Fare Basic Code",
                        id: "rule_basic_code",
                        required: false,
                        val: "",
                        break: true,
                        inputType: {
                            structure: "input",
                            type: "number",
                        },
                    },
                    // office_id
                    {
                        postVal: "office_id",
                        label: "Office ID",
                        id: "rule_office_id",
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "number",
                        },
                    },
                    // same_flight_whole
                    {
                        postVal: "same_flight_whole",
                        label: "Same flight whole itinerary:",
                        id: "rule_sfwi",
                        required: false,
                        val: false,
                        tooltip: true,
                        break: true,
                        inputType: {
                            structure: "input",
                            type: "checkbox",
                        },
                    },
                    // journey_type
                    {
                        postVal: "journey_type",
                        label: "Journey Type",
                        id: "rule_jour_t",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "all",
                                "one_way",
                                "round_trip",
                                "multi_destination",
                            ],
                        },
                    },
                    // booking_classes
                    {
                        postVal: "booking_classes",
                        label: "Booking Classes",
                        id: "rule_book_c",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "all",
                                "economy",
                                "business",
                                "premium",
                                "first",
                            ],
                        },
                    },
                    // arrival_destination_multi
                    {
                        postVal: "arrival_destination_multi",
                        label: "Choose Arrival Destination for Multidest",
                        id: "rule_arriv_t",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "non",
                                "use_first_destination_as_arrival_destination",
                                "use_last_destination_as_arrival_destination",
                            ],
                        },
                    }, // apply_to_each_leg
                    {
                        postVal: "apply_to_each_leg",
                        label: "Apply markup to each leg:",
                        id: "rule_amtel",
                        required: false,
                        val: false,
                        inputType: {
                            structure: "input",
                            type: "checkbox",
                        },
                    }, // no_of_stops
                    {
                        postVal: "no_of_stops",
                        label: "Number of stops",
                        id: "rule_num_stop",
                        required: false,
                        val: "",
                        inputType: {
                            structure: "select",
                            type: "single",
                            openVal: false,
                            options: ["0", "1", "2", "2+"],
                        },
                    }, // minimum_ticket_cost
                    {
                        postVal: "minimum_ticket_cost",
                        label: "Minimum Ticket Cost",
                        id: "rule_ntc",
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "text",
                        },
                    }, // booking_class_of_service
                    {
                        postVal: "booking_class_of_service",
                        label: "Booking Class of Service",
                        id: "rule_bcos",
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "text",
                        },
                    },
                    // any_combination_of_itinerary_classes
                    {
                        postVal: "any_combination_of_itinerary_classes",
                        label: "Any combination of specified classes for Itinerary:",
                        id: "rule_acsci",
                        required: false,
                        val: false,
                        inputType: {
                            structure: "input",
                            type: "checkbox",
                        },
                    },
                    // negotiated_rates
                    {
                        postVal: "negotiated_rates",
                        label: "Negotiated Rates",
                        id: "rule_nego_r",
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "text",
                        },
                    },
                ],
                1: [
                    // from_country
                    {
                        postVal: "from_country",
                        label: "From Country",
                        id: "rule_from_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "countries",
                            openVal: false,
                        },
                    },
                    // to_country
                    {
                        postVal: "to_country",
                        label: "To Country",
                        id: "rule_to_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "countries",
                            openVal: false,
                        },
                    },
                    // from_city
                    {
                        postVal: "from_city",
                        label: "From City",
                        id: "rule_from_city",
                        val: [],
                        userVal: [],
                        mapVal: [],
                        inputType: {
                            structure: "select",
                            type: "cities",
                            openVal: false,
                        },
                    },
                    // to_city
                    {
                        postVal: "to_city",
                        label: "To City",
                        id: "rule_to_city",
                        val: [],
                        userVal: [],
                        mapVal: [],
                        inputType: {
                            structure: "select",
                            type: "cities",
                            openVal: false,
                        },
                    },
                    // from_iata
                    {
                        postVal: "from_iata",
                        label: "From IATA",
                        id: "rule_from_iata",
                        tooltip: true,
                        val: "",
                        inputType: {
                            structure: "input",
                            text: "text",
                        },
                    },
                    // to_iata
                    {
                        postVal: "to_iata",
                        label: "To IATA",
                        id: "rule_to_iata",
                        tooltip: true,
                        val: "",
                        inputType: {
                            structure: "input",
                            text: "text",
                        },
                    },
                    // meta_search_engine
                    {
                        postVal: "meta_search_engine",
                        label: "Meta-Search Engine",
                        id: "rule_mse",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "kayak",
                                "trivago",
                                "wego",
                                "tripadvisor",
                            ],
                        },
                    },
                ],
            },
            exclude: {
                0: [
                    // exclude_marketing_carriers
                    {
                        postVal: "exclude_marketing_carriers",
                        label: "Exclude Marketing Carriers",
                        id: "exclude_mark_c",
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                        },
                    },
                    // exclude_operating_carriers
                    {
                        postVal: "exclude_operating_carriers",
                        label: "Exclude Operation Carriers",
                        id: "exclude_aff_c",
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                        },
                    },
                    // exclude_affiliate_carriers
                    {
                        postVal: "exclude_affiliate_carriers",
                        label: "Exclude Affiliate Carriers",
                        id: "exclude_ope_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "airlines",
                            openVal: false,
                        },
                    },
                    // exclude_booking_classes
                    {
                        postVal: "exclude_booking_classes",
                        label: "Exclude Booking Class",
                        id: "exclude_air_p",
                        required: false,
                        val: [],
                        inputType: {
                            structure: "select",
                            type: "multiple",
                            openVal: false,
                            options: [
                                "all",
                                "economy",
                                "business",
                                "premium",
                                "first",
                            ],
                        },
                    },
                    // exclude_booking_class_of_service
                    {
                        postVal: "exclude_booking_class_of_service",
                        label: "Exclude Booking Class of Service",
                        id: "exclude_basic_code",
                        required: false,
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "text",
                        },
                    },
                    // exclude_fare_basic_code
                    {
                        postVal: "exclude_fare_basic_code",
                        label: "Exclude Fare Basis Code",
                        id: "exclude_office_id",
                        val: "",
                        inputType: {
                            structure: "input",
                            type: "text",
                        },
                    },
                ],
                1: [
                    // exclude_from_country
                    {
                        postVal: "exclude_from_country",
                        label: "Exclude From Country",
                        id: "exclude_from_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "countries",
                            openVal: false,
                        },
                    },
                    // exclude_to_country
                    {
                        postVal: "exclude_to_country",
                        label: "Exclude To Country",
                        id: "exclude_to_c",
                        required: false,
                        val: [],
                        userVal: [],
                        inputType: {
                            structure: "select",
                            type: "countries",
                            openVal: false,
                        },
                    },
                    // exclude_from_city
                    {
                        postVal: "exclude_from_city",
                        id: "exclude_from_city",
                        required: false,
                        val: [],
                        userVal: [],
                        mapVal: [],
                        inputType: {
                            structure: "select",
                            type: "cities",
                            openVal: false,
                        },
                    },
                    // exclude_to_city
                    {
                        postVal: "exclude_to_city",
                        id: "exclude_to_city",
                        required: false,
                        val: [],
                        userVal: [],
                        mapVal: [],
                        inputType: {
                            structure: "select",
                            type: "cities",
                            openVal: false,
                        },
                    },
                    // exclude_from_iata
                    {
                        postVal: "exclude_from_iata",
                        label: "Exclude From IATA",
                        id: "exclude_from_iata",
                        tooltip: true,
                        val: "",
                        inputType: {
                            structure: "input",
                            text: "text",
                        },
                    },
                    // exclude_to_iata
                    {
                        postVal: "exclude_to_iata",
                        label: "Exclude To IATA",
                        id: "exclude_to_iata",
                        tooltip: true,
                        val: "",
                        inputType: {
                            structure: "input",
                            text: "text",
                        },
                    },
                    // region
                    {
                        postVal: "region",
                        label: "Region",
                        id: "region",
                        tooltip: true,
                        val: "All",
                        inputType: {
                            structure: "input",
                            type: "checkbox",
                        },
                    },
                ],
            },
        },
    },
    otherData: {
        product: "Air",
        remark_message: "",
        departure_date_after: "",
        departure_date_from: "",
        departure_date_to: "",
        booking_date_from: "",
        booking_date_to: "",
        display_options: "",
        active_indicator: "",
        status: 'active'
    },
}
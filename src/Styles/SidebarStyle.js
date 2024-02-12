

const Style = {
    Bar : {
        position: "absolute",
        width: "200px",
        height: "952px",
        left: "0px",
        top: "72px",

        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(217, 217, 217, 0.5)"
    },
    Frame: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "24px",

        position: "absolute",
        width: "131px",
        height: "288px",
        left: "30px",
        top: "25px",
    },
    feature: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        gap: "16px",

        width: "78px",
        height: "28px",


        /* Inside auto layout */

        flex: "none",
        order: "0",
        flexGrow: "0"
    },
    
}

export default Style;
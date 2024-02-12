import Breadcrumb from 'react-bootstrap/Breadcrumb';

function checkPage(page, datasets) {
    if (page == "Home") {
        return (
            <Breadcrumb.Item style={{
                textDecoration: "none",
                background: "linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent"

            }}>
                {page}
            </Breadcrumb.Item>
        )

    } else if (page == "Datasets") {
        if (datasets == "") {
            return (
                <Breadcrumb.Item style={{
                    textDecoration: "none",
                    background: "linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent"

                }}>
                    {page}
                </Breadcrumb.Item>
            )
        } else {
            return (
                <Breadcrumb.Item active>
                    {page}
                </Breadcrumb.Item>
            )
        }

    }else if (page == "cleaning") {
        return (
            <Breadcrumb.Item style={{
                textDecoration: "none",
                background: "linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent"

            }}>
                {page}
            </Breadcrumb.Item>
        )

    }
}

function BreadCrumb({
    id,
    page,
    datasets,
}) {

    return (
        <Breadcrumb style={{
            position: "absolute",
            left: "250px",
            top: "90px"
        }}>
            <Breadcrumb.Item active>{id}</Breadcrumb.Item>
            {checkPage(page, datasets)}
            {datasets &&
                <Breadcrumb.Item style={{
                    textDecoration: "none",
                    background: "linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent"

                }}>
                    {datasets}
                </Breadcrumb.Item>
            }

        </Breadcrumb>
    )

}

export default BreadCrumb;

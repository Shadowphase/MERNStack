import React from "react";

function Button ({click, children}) {
    return (
    <Button onClick={click}>
        {children}
    </Button>
    )
}

export default React.memo(Button);
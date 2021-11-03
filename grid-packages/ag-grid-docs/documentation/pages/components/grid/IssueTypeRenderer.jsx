import React, {forwardRef} from "react"

const IS_SSR = typeof window === "undefined"

const bugIcon = "/issue-type-icons/bug-icon.svg"
const taskIcon = "/issue-type-icons/task-icon.svg"

const PaddingCellRenderer = forwardRef((props, ref) => {
    const icon = props.valueFormatted === 'Defect' ? bugIcon : taskIcon 

    return <>{!IS_SSR && <div ref={ref} style={{fontSize: "16px"}}>
        <img alt={"issue type icon"} src={icon}></img> {' '}
        <span>
        {props.valueFormatted}
        </span>
        </div>}</>
})

export default PaddingCellRenderer
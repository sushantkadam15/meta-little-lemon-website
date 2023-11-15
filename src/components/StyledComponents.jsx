export const StyledButton = ({name, onclick }) => {
    return (
        <button className={"bg-secondary text-neutral py-2 px-3 rounded-2xl"} onClick={onclick}>
            {name}
        </button>
    );
}

export const Container = (props) => {
    return(
        <div className="max-w-screen-lg md:mx-auto my-5">
            {props.children}
        </div>
    )
}

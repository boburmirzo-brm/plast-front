const usePreventLeave = () => {
    const beforeUnloadListener = (e)=>{
        e.preventDefault();
        return e.returnValue = "Are you sure you want to exit?"
    }
    const enablePrevent = () => window.addEventListener("beforeunload",beforeUnloadListener);
    const removePrevent = () => window.removeEventListener("beforeunload",beforeUnloadListener);
    return {enablePrevent, removePrevent}
}

export default usePreventLeave

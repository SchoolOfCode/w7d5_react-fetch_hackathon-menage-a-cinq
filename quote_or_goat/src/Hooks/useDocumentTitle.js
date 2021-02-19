import {useEffect} from "react"; 
// We want to simplify how to update our title
//Custom hook where the title can be modified from any component and when input changes
function useDocumentTitle(name) {
useEffect(() => {    
document.title = name; 
},[name]);
}
export default useDocumentTitle;
export function isAuthenticated() {
    console.log("inside isAuthenticated");
    // alert("inside isAuthenticated");
    const token:string|null = localStorage.getItem("userid");
    console.log("token", token);
    if(token == null || token == "") {
        return false;
    }
    return true;
}
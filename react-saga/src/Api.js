export default {
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(username)
            }, 3000)
        })
    },
    setItem(name, value) {
        localStorage.setItem(name, value)
    },
    removeItem(name) {
        localStorage.removeItem(name);
    }
}
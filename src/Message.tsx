function Message() {
    const name = "Birdwatchers";
    let msg = "Hello {name}"
    if (name) {
        msg = "Hello " + name
    }
    return <h1>{msg}</h1>
}

export default Message;
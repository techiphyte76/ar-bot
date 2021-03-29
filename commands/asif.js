module.exports = {
  name: "asif",
  description: "Fetches date until asif bday",
  execute(message) {
    let graduationCountdown = () => {
      const gradDate = new Date("06/25/2021");
      const now = new Date();
      let distance = gradDate.getTime() - now.getTime();
      console.log(distance);
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let reply = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      return reply;
    };
    message.channel.send("Time left until Asif's birthday: " + graduationCountdown());
  },
};

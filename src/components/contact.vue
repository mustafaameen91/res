<template>
  <div class="contact">
    <h2> CONTACT US</h2>
    <form class="form">
      <input type="text" name="userName" value="" placeholder="User Name"/>
      <input type="email" name="email" value="" placeholder="Email">
      <textarea name="messege"  placeholder="Your Messege"></textarea>
      <button type="button" name="button">Send</button>

      <div class="user">
        <font-awesome-icon icon="user-tie" class="userIcon" size="lg"/>
      </div>
      <div class="mail">
        <font-awesome-icon icon="at" class="emailIcon" size="lg" />
      </div>
      <div class="msg">
        <font-awesome-icon icon="envelope" class="msgIcon" size="lg" />
      </div>

      </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$offWhite:#F1FAEE;
$primary:#1aaab9;
$secondry:#036c77;
$Fsize:15px;


.contact{
  display:grid;
  grid-template-columns: 90%;
  align-content: center;
  justify-content: center;
}
input[type = text]{
  grid-area: text;
  font-size: $Fsize;
  background: none;
  border-bottom: 1px solid $primary;
  border-top: none;
  border-left: none;
  border-right: none;
  color: $offWhite;
  &:focus{
    outline: none;
    border-bottom: 1px solid $offWhite;
  }
  &:focus ~ .user{
    background-color: $offWhite
  }
  &:focus ~ .user > .userIcon{
    color: $primary
  }
}
input[type = email]{
  font-size: $Fsize;
  grid-area: email;
  background: none;
  border-bottom: 1px solid $primary;
  border-top: none;
  border-left: none;
  border-right: none;
  color: $offWhite;
  &:focus{
    outline: none;
    border-bottom: 1px solid $offWhite;
  }
  &:focus ~ .mail{
    background-color: $offWhite
  }
  &:focus ~ .mail > .emailIcon{
    color: $primary
  }
}
textarea{
  grid-area: textarea;
  font-size: $Fsize;
  background: none;
  border-bottom: 1px solid $primary;
  border-top: none;
  border-left: none;
  border-right: none;
  color: $offWhite;
  transition: all .5s;
  &:focus{
    outline: none;
    border-bottom: 1px solid $offWhite;
  }
  &:focus ~ .msg{
    background-color: $offWhite
  }
  &:focus ~ .msg > .msgIcon{
    color: $primary
  }
}
button{
  grid-area: button;
  border-radius: 30px;
  background-color: $primary;
  color: $offWhite;
  font-size: 15px;
  font-weight: 900;
  &:focus{
    outline: none
  }
}
.user{
  background-color: $primary;
  grid-area: user;
  width: 40%;
  justify-self:end;
  border-radius: 10px;
}
.mail{
  background-color: $primary;
  grid-area: mail;
  width: 40%;
  justify-self:end;
  border-radius: 10px;
}
.msg{
  background-color: $primary;
  grid-area: msg;
  width: 40%;
  justify-self:end;
  border-radius: 10px;
}
.userIcon{
  color: $offWhite;
  padding: 10px;
}
.emailIcon{
  color: $offWhite;
  padding: 10px;
}
.msgIcon{
  color: $offWhite;
  padding: 10px;
}
.form{
  grid-template-columns: repeat(7,1fr);
  grid-auto-rows: minmax(40px ,auto);
  display: grid;
  grid-template-areas: '. user text text text . .'
                        '. mail email email email . .'
                        '. msg textarea textarea textarea . .'
                        '. . textarea textarea textarea . .'
                        '. . textarea textarea textarea . .'
                        '. . textarea textarea textarea . .'
                        '. . . button . . .';
  align-content: center;
  grid-gap: 10px;
}
</style>

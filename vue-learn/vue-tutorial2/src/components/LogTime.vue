<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>
<style>

</style>
<script>

    export default {
        name : 'LogTime',
        data() {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods:{
          save() {
            const plan = {
              name : '马里奥',
              image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAeAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwAEBQYBB//EADsQAAIBAwEFBAgEBAcBAAAAAAECAwAEESESEzFBYQUiUYEGMnGRobHB8BTR4fEjM0JyNENic5Ky0hX/xAAYAQEBAQEBAAAAAAAAAAAAAAACAQMABP/EACERAAIBAwQDAQAAAAAAAAAAAAABAhESIQQUMUEDE1Ei/9oADAMBAAIRAxEAPwDBSDpTlgq+lt0pyW3SvWeIzxD0pgg6VoLb0Yt+lUlTOEHSiEHStIW/SiW2zyqVKZog6UYg6VqLbdKatr0otiRkrb9KdFabR4VqradKfDbYPCi5CRlfgz4YohYErtN6via2xbFTk8aGS3aQ5NByGYMkGdFGlKa26V0BsxyFLNn0qXEOea26VK3HtOlSpccV0tactrWmltjlT1t+lO8ztMkWvSiFrWuLfpRi2HhXXnWmOtr0pq2vStYW3SjW26VHMqiZaW3SnLa9K0ltulOW3oOZoomalr0p8dqPCtFYBTVg6UXIagZwtRxNefhh4VrbjpU3HShcO0yTbDwoTbryXXxNarQ9KW0VS4lplNaxg9856CpWg0NSjcW0povSnKB4VxUXpfcY70dupzgak5+NPX0tuc6RW7HGeY+tZ7lGm2f07IKvhRrGtcQfTSVW2WihB9uPmadD6XTyYEUUbaa4YH5Gi9UkVaZ/TtN2tGIwPCuQX0mvyFItHAJxrFz/AOVGPSi9XO8SOPHHbQDHvai9ZEa0jOvWMeNNWMcyK46L0pvncLE9q2fBCfkxo29J+0/8v8MxHHMbrjzOlHewFtJHZLEORFSae1tDELqZYzK2wmf6jjNcf/8Af7aBBlewUZPCTX44rK7X7Zmu7m038lvdNHMDgHCxAcTw15ZGvKuWsg3gu2kuT6ksaEZB0NA8QFchb+lBSAxLPEAijGzDgKOlY8/bsbsSO3b5PFVzpw6UXrvG8JMq0s+2jv5Ao4mkNs183nubG73Cz9tNJuW2o2mdiQfHUfelRjbTZ2+2ZGx1TA8yM1lLVM0WnOrvvSjsS0LK/aETyKSDHDmRsjlgVK5J7eAd38deMhGuzKijh0qUVqKi9CRxUkiQvCzRDBzsl2PI4BPT9aP8dMHzFBGuycZCDTXHlwqu+1McN65wUHI8PjT7QLvo4pcM8jZOTjx4/Ot2o0yYZ6Dg7Sv50DNKgRgpCgAnU/CrscV3KV3lxOyuyozK2FUt+tZ808gZoN0pKyaheWmaVF2jIIN0zMSxAIBIOVNFxbX5RVJLk1hIWdwLZ9FYbyXJ4DXn5+6gXtSKNpFhWPbU4wsYAYa5+efKq83aYETbchxK+0y/6SBkVRleFjJMcBy21gacjp9+FCPjryivyfDbivptlFe5kVSAFVWwMYzwpX466aPdvKxUrxUZ9n5VmW67xjhjphQSeAxnNAstzbmKRFZtpScnUYOn1FX1qpL5GitzPuyJZZGTq5AI8atR9sybsQ2ykOMYGhA45rMhnFwsAlGxHJkEDmFOv/Ye6gW4itlfZKtibA09ZRwqOFcNFU2jci7Tu2cLcSKmVwMrxPt8aCfthlk2CqHZwWKHjr+lYy3yOh2+BYlenGmmWFAwBPqbII46UfWk+BeyqLcsxYRjdqEAwQDnJPP40gNGX4Kgxgr5n8zVKGZpxJIMhEUDjzOcfKl/ihtY2CQrYORy+xWig+jO4u7Q0UMToNnvYz1ryqxukaFiDgKc+GgP5V7VUX8LcFA73KsERWaU6EHBVgMj6+6qTyPJOsjnZYEg45EffypcExhZo8+GfLNSTafeAnUspHUYYVsoUYZMuSXqMjMQVdlBOD/UOdUb6QI4dBg7WflXgBNnHhhjGT5ftXl2CuUcMuFzjHIinCCTwZttg3EwdfV4gfGjjlVrSVSuXOChPs4fGkXJ2iSOarjHPlXofeQKpOCoA8hmtHFUIi1BcyJAxA7uBnrgU+C7/hSIT3mUoueWpP0qnGc7Me1sxcyKhYQzzI2pzkEdDWcoJtiTaLSSsRb5Od2hA8wPypE38SAupGUPD28/hQsxiAkBBXdkgeHeFSDvRyKCO9g61yVMnAQP3ACOYyaNpWE64GhJoLiIwRKyNldrJ6jGho+0NjKSIcFdnhzpYbOLtvNu4ipUY2u9pxAPOjSRWB3EfrRlmbngYqoZhvyyEbLa49h50L3DJ/CXhsgN7By99YeurEmWJt3Fbh00LaN8qlZ88paHBzoa8rfx+PGQtnu8VmVv62Uj4UckmSCh9RdemgwfeaQgAERAGf3r2H+af7T8qdEjnksRgxhUk0VxgHoGFHe3AkmCvq6gIzAZJ040Nz6vsL46erSTrcZPHX5GhFJ5OeMCi3cChgSuQCOB1/evVUAshOPA4460ptHbGmDpRn1vvxFasI4lQCiZ9fZ9uTRIyPKC4BBVSD5/fuqt/wChUHqL7Pqalp1SzNKNgLoRtMuvt0pYO6bABJ7v614NUH+8KKTS6THgfrUS6LyG2ZMRscZBI8q8uW3lshGMqQpHlipN/jIv7h9KWNYdfEfM0V0zhybJjiYk97Q9KCXaSQbXJcdKCP8Alj20R1mwddPrVpRlPAwVXQgHGcZ9mKlJHrP986lNYJyf/9k=',
              date : this.date,
              totalTime : this.totalTime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan)
            this.$store.dispatch('addTotalTime', this.totalTime)
            this.$router.go(-1)
          }
        }
    }
</script>

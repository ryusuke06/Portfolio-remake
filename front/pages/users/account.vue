<template>
  <div>
    <v-img
      :src="(require('../../assets/imgs/backgrounds/castle.jpg'))"
      height="480"
    >

      <v-row
        :align="alignment"
        :justify="justify"
      >
        <v-col
          cols="7"
          height="480"
        >
          <v-img
            :src="(require('../../assets/imgs/jobs/mahou.gif'))"
            height="325"
            contain
          ></v-img>
        </v-col>

        <v-col
          cols="5"
          height="480"
        >
          <v-row>
            <v-col cols="12">
              <v-row cols="auto">
                <div class="blackboard answer">
                  <span @click="isStatus">
                    <p class="blink-before">つよさ</p>
                  </span>
                  <span @click="isEquip">
                    <p class="blink-before">そうび</p>
                  </span>
                  <span><p class="blink-before">じゅもん</p></span>
                  <span @click="deleteUser"><p class="blink-before">記録を消す</p></span>
                </div>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            :align="alignment"
            :justify="justify"
          >
            <v-col cols="12">
              <v-img
                :src="(require('../../assets/imgs/transparent.png'))"
                height="250"
              >
                <v-overlay
                  :absolute="absolute"
                  :value="overlay"
                  :opacity=0
                >
                <v-row cols="auto">
                  <div class="blackboard answer">
                    <component :is="currentView"></component>
                  </div>
                </v-row>
                </v-overlay>
              </v-img>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-img>
  </div>
</template>

<script>
import status from '@/components/molecules/status'
import equipments from '@/components/molecules/equipments'

export default {
  components: {
    status,
    equipments,
  },
  data(){
    return{
      alignment: 'center',
      justify: 'center',
      absolute: true,
      overlay: false,
      currentView: '',
    }
  },
  methods: {
    deleteUser() {
      this.$axios
        .delete('api/v1/auth', {
          headers: {
            // ローカルストレージのtokenから必要な情報をdeleteリクエストで送信
            'access-token': localStorage.getItem('access-token'),
            'uid': localStorage.getItem('uid'),
            'client': localStorage.getItem('client'),
          },
        })
        .then((response) => {
          // APIからログアウト後AuthModuleでもログアウト関数を実行
          this.$auth.logout()
          window.location.href = '/'
        })
    },
    isStatus(){
      this.overlay = !this.overlay;
      this.currentView = 'status';
    },
    isEquip(){
      this.overlay = !this.overlay;
      this.currentView = 'equipments';
    }
  },
}
</script>
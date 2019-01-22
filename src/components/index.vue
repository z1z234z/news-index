<template>
  <el-container class="contioner-index">
      <div class="content">
         1. content 控制页面内容的最大宽度 每个页面需要套上这一层<br>
         2. 项目里配置的字体图标库是 Font Awesome http://www.fontawesome.com.cn/faicons/; <br>
         3. 项目里全局配置了echart 调用时，用this.$echart.init();
          
      </div>
  </el-container>
</template>
<script>
export default {
    name:'',
    cpmponents:{},
    data() {
        return {
        
        };
    },
    computed:{

    },
    watch:{

    },
    mounted() {

    },
    methods: {
        getData() {
            // get 调用
            this.httpGet('url',{
                id:1,
                name:a
            }).then((result) => {
                if(result.success) {

                } else {

                }
            }).catch((error) => {
                console.log('服务器请求失败')
            })

            // post 调用
            this.httpPost('url',{
                id:1,
                name:a
            }).then((result) => {
                if(result.success) {

                } else {

                }
            }).catch((error) => {

            });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/variables.scss";
.contioner-index {
    // color: $themeColor;
    .left{
       min-height: 300px;
       border: 1px solid #ddd;
    }
    .right{
       min-height: 400px;
       border: 1px solid #ddd;
    }
}
</style>



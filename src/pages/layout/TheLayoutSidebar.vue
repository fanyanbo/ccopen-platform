<template>
  <aside class="sidebar" :class="{'sidebar-hide': !openNav}">
    <vue-scroll>
      <el-menu :default-active="$route.path" class="sidebar-menu" :collapse="!openNav" :default-openeds="openeds"
               @select="menuSelect" :collapse-transition="false">
        <template v-for="(level1, index1) in $router.options.routes" v-if="level1.menu">
          <!-- 一级菜单 -->
          <el-menu-item v-if="level1.children.length === 1 && permissions.includes(level1.children[0].path)"
                        :index="level1.children[0].path" :key="index1">
            <i :class="level1.children[0].icon"></i><span slot="title" class="oneclass-menu">
            {{$t(level1.children[0].name)}}</span>
          </el-menu-item>
          <el-submenu :index="index1+''" v-if="level1.children.length > 1" :key="index1+''">
            <template slot="title"><i :class="level1.icon"></i><span slot="title" class="oneclass-menu2">{{$t(level1.name)}}</span></template>
            <template v-for="(level2, index2) in level1.children">
              <!-- 二级菜单 -->
              <el-menu-item v-if="!level2.children && permissions.includes(level2.path)"
                            :index="level2.path" :key="index1+'-'+index2" class="twoclass-menu">
                {{$t(level2.name)}}
              </el-menu-item>
              <el-submenu :index="index1+'-'+index2" v-if="level2.children" :key="index1+'-'+index2">
                <!-- 三级菜单 -->
                <template slot="title"><i :class="level2.icon"></i>{$t({level2.name)}}</template>
                <el-menu-item v-for="(level3, index3) in level2.children" :index="level3.path"
                              :key="index1+'-'+index2+'-'+index3" v-if="permissions.includes(level3.path)">
                  {{$t(level3.name)}}
                </el-menu-item>
              </el-submenu>
            </template>
          </el-submenu>
          <div :key="index1" class="divided"></div>
        </template>
      </el-menu>
    </vue-scroll>
  </aside>
</template>

<script>
export default {
  name: 'TheLayoutSidebar',
  props: ['openNav'],
  data () {
    let user_info = JSON.parse(sessionStorage.getItem('user-info')).permissions || []
    let permissions = []
    console.log(this.$router.options.routes)
    user_info.forEach(p => {
      permissions.push(p.path)
    })
    return {
      permissions,
      openeds: ['4', '8'] // 默认展开子菜单
    }
  },
  methods: {
    menuSelect (index) {
      this.$router.push(index)
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 240px;
  position: absolute;
  top: 0;
  bottom: 0;
  border-right: 1px solid #e6e6e6;
  background-color: #ffffff;
  z-index: 99;
  .sidebar-menu {
    border: none;
    height: 100%;
  }
  .oneclass-menu {
    font-size: 16px;
    margin-left: 10px;
  }
  .oneclass-menu2 {
    font-size: 16px;
    margin-left: 14px;
  }
  .twoclass-menu {
    margin-left: 10px;
  }
  .divided {
    position: absolute;
    left: 50px;
    height: 1px;
    background-color: #e7e7eb;
    width: 100px;
  }
}

.sidebar-hide {
  width: 65px;
}
</style>

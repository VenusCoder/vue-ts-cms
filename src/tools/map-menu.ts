import type { RouteRecordRaw } from 'vue-router'

//加载本地路由

function loadLocalRoute() {
  //动态添加路由:
  //需要注意的是，RouteRecordRaw 只是一个类型定义，它并不会自动注册路由。
  // 要将其注册到 Vue Router 中，还需要使用 createRouter 函数创建路由实例，
  // 并将路由记录传递给该实例的 routes 属性：
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true,
  })
  console.log(files, '0000')

  for (let key in files) {
    let module = files[key]
    localRoutes.push(module.default)
    console.log(module.default, '77777')
  }

  return localRoutes
}

export function mapMenuRoute(userMenu: any) {
  //加载本地路由
  const localRoutes = loadLocalRoute()

  //根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []

  for (let menu of userMenu) {
    for (let submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) routes.push(route)
    }
  }
  return routes
}

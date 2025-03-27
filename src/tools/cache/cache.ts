enum cacheType {
    local,
    session
}


class Cache {
    storage:Storage

    constructor(type:cacheType) {
        this.storage=type==="cacheType.local"?localStorage:sessionStorage

    }



    // 设置永久缓存
	setCache<T>(key: string, val: T) {
		this.storage.setItem(key, JSON.stringify(val));
	}

    // 获取永久缓存
	getCache(key: string) {
		let json = <string>this.storage.getItem(key);
		return JSON.parse(json);
	}
	// 移除永久缓存
	removeCache(key: string) {
		this.storage.removeItem(key);
	}
	// 移除全部永久缓存
	clearCache() {
		this.storage.clear();
	}

}
let localCache=new Cache(cacheType.local)
let sessionCache=new Cache(cacheType.session)

export {localCache,sessionCache}
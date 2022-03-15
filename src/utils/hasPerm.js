import { userMainStore } from '/src/store/index.js'

const hasPerm = (permission) => {
    const mainStore = userMainStore()
    const userPermissions = mainStore.userPermissions
    return userPermissions.includes(permission)
}
export default hasPerm
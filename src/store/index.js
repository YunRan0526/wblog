
import { defineStore } from 'pinia'

export const userMainStore = defineStore({
  id: 'mainStore',
  state: () => {
    return {
      userPermissions: [1,2,3],
    }
  }

})

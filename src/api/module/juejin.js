import axios from "@/api/axios.js"

/**
 * xxxxx
 *
 * @author YBW
 */

export function getMyCollection() {
    return axios({
        headers: {
            "Server": "Tengine",
            "Timing-Allow-Origin": "*",
            "EagleId": "b7d8a81a16340472684935752e",
            "X-Tt-Logid": "202110122201080102121940162502553F",
            "x-tt-trace-tag": "id=03;cdn-cache=miss;type=dyn",
            "x-tt-trace-host": "011bd03b640dc925ec00cb57bbf176e81472ca8f7211b1a6a63f9d71e00c9fc4ee530251cfdd8b75f13e557004efabcaf588c096e6b1e1889e3c349d4f959ce5791d58b41d51f7c08e4b376137259399348505d20d2ade74091613d2e86483bc02",

        },
        url: '/juejin_api/interact_api/v1/collectionSet/get',
        method: 'get',
        params: {
            aid: '2608',
            uuid: '7017970918502041119',
            tag_id: '7018169117521739790',
            cursor: '0'
        }
    })
}

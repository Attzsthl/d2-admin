import request from '@/plugin/axios'
export function getLandApprovePage (params) {
  return request({
    url: '/mangeApprove',
    method: 'post',
    params
  })
}

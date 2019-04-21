import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/ajaxLogin',
    method: 'post',
    data
  })
}

import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Write short novel',
  time: moment().endOf('day').fromNow(),
  body: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
  buttons: [{
    type: 'primary',
    message: 'Read more'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Sarah Young accepted your friend request',
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-camera',
  color: 'purple',
  title: 'Watch a youTube video',
  time: moment('20130620', 'YYYYMMDD').fromNow(),
  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allowfullscreen></iframe></div>'
}]

export const payments = [{
  name: 'bag',
  amount: '20',
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag1',
  amount: 30,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag2',
  amount: 40,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag4',
  amount: 50,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag6',
  amount: 60,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag3',
  amount: 70,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag2',
  amount: 80,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
},
{
  name: 'bag',
  amount: 20,
  paid_on: '2017-01-23',
  method: 'Paypal',
  transaction_id: '123wre34232443324'
}]

export const cdrs = [{
  subscriber_phone: '23443241241234',
  subscriber_id: '20',
  start_time: '2017-01-23',
  end_time: '2013-4-5',
  phone_number: '2132213213321',
  actual_duration: 32,
  billed_duration: 23,
  rate: 54,
  country: 'russia',
  code_name: '064',
  buy_rate: 34,
  profit: 'sdfsfasdfsd'
},
{
  subscriber_phone: '43534534',
  subscriber_id: '20',
  start_time: '2017-01-23',
  end_time: '2013-4-5',
  phone_number: '2132232213213321',
  actual_duration: 332,
  billed_duration: 23,
  rate: 54,
  country: 'dgasgdsgas',
  code_name: '3242',
  buy_rate: 34,
  profit: 'sdfsfasdfsd'
},
{
  subscriber_phone: '423423242',
  subscriber_id: '20',
  start_time: '2017-01-23',
  end_time: '2013-4-5',
  phone_number: '2132213213321',
  actual_duration: 32,
  billed_duration: 23,
  rate: 54,
  country: 'russiafddsf',
  code_name: '064',
  buy_rate: 34,
  profit: 'fsdsrewewwewwewe'
}]

export const subscribers = [{
  id: '23443241241234',
  phone_number: '23423432420',
  email: 'test@gmail.com',
  company_name: 'dsfsfsfdf',
  first_name: 'sfddasf',
  last_name: 'dsfsfsdf',
  registered_on: 'sdfsdfsd',
  last_sign_in: 'dsfsfsafsfa',
  last_paid: '2014-2-3',
  balance: 432,
  status: 'enabled',
  action: 'approved'
},
{
  id: '234224',
  phone_number: '34534',
  email: 'test12@gmail.com',
  company_name: 'dsfsfsfdf',
  first_name: 'gdfgfd',
  last_name: 'gdg',
  registered_on: 'sdfsdfsd',
  last_sign_in: 'dsfsfsafsfa',
  last_paid: '2014-2-3',
  balance: 432,
  status: 'enabled',
  action: 'approved'
}
]

export const subscriberpayments = [{
  subscriber_id: '23443241241234',
  phone_number: '23423432420',
  amount: 342,
  pay_method: 'Credit Card',
  paid_on: '2015-3-2'
},
{
  subscriber_id: '23443241241234',
  phone_number: '23423432420',
  amount: 342,
  pay_method: 'Credit Card',
  paid_on: '2015-3-2'
},
{
  subscriber_id: '23443241241234',
  phone_number: '23423432420',
  amount: 342,
  pay_method: 'Credit Card',
  paid_on: '2015-3-2'
}
]

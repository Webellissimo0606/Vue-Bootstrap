<template>
  <section class="content">    
    <div class="row center-block">      
      <div class="col-md-12">
        <div class="box">          
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-sort="ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">ID</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Email</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Company Name</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">First Name</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Name</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Registered On</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Sign in</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Paid</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Balance</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Status</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(subscriber, index) in subscribers"  :class="{'even': $index % 2 === 0, 'odd': $index % 2 !== 0 }" role="row">
                        <td class="sorting_1">{{subscriber.id}}</td>
                        <td>{{subscriber.phone_number}}</td>
                        <td>{{subscriber.email}}</td>
                        <td>{{subscriber.company_name}}</td>
                        <td>{{subscriber.first_name}}</td>
                        <td>{{subscriber.last_name}}</td>
                        <td>{{subscriber.registered_on}}</td>
                        <td>{{subscriber.last_sign_in}}</td>
                        <td>{{subscriber.last_paid}}</td>
                        <td>{{subscriber.balance}}</td>
                        <td>{{subscriber.status}}</td>
                        <td>{{subscriber.action}}</td>
                      </tr>                      
                    </tbody>                    
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {subscribers} from '../../demo'
import $ from 'jquery'

// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Subscribers',
  data () {
    return {
      subscribers
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>

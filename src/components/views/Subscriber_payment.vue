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
                        <th aria-sort="ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Subscriber ID</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Amount</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Pay Method</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Paid On</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(subscriber_payment, index) in subscriberpayments"  :class="{'even': $index % 2 === 0, 'odd': $index % 2 !== 0 }" role="row">
                        <td class="sorting_1">{{subscriber_payment.subscriber_id}}</td>
                        <td>{{subscriber_payment.phone_number}}</td>
                        <td>{{subscriber_payment.amount}}</td>
                        <td>{{subscriber_payment.pay_method}}</td>
                        <td>{{subscriber_payment.paid_on}}</td>
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
import {subscriberpayments} from '../../demo'
import $ from 'jquery'

// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Subscriber Payment',
  data () {
    return {
      subscriberpayments
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

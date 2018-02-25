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
                        <th aria-sort="ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Subscriber Phone</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Subscriber id</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Start Time</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">End Time</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Actual Duration</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Billed Duration</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Rate</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Country</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Code Name</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Buy Rate</th>
                        <th colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cdr, index) in cdrs"  :class="{'even': $index % 2 === 0, 'odd': $index % 2 !== 0 }" role="row">
                        <td class="sorting_1">{{cdr.subscriber_phone}}</td>
                        <td>{{cdr.subscriber_id}}</td>
                        <td>{{cdr.start_time}}</td>
                        <td>{{cdr.end_time}}</td>
                        <td>{{cdr.phone_number}}</td>
                        <td>{{cdr.actual_duration}}</td>
                        <td>{{cdr.billed_duration}}</td>
                        <td>{{cdr.rate}}</td>
                        <td>{{cdr.country}}</td>
                        <td>{{cdr.code_name}}</td>
                        <td>{{cdr.buy_rate}}</td>
                        <td>{{cdr.profit}}</td>
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
import {cdrs} from '../../demo'
import $ from 'jquery'

// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Cdr',
  data () {
    return {
      cdrs
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

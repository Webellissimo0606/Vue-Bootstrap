<template>
  <section class="content">
    <div class="row center-block">      
      <div class="col-md-12">
      
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#subscriber">Subscriber</a></li>
          <li><a data-toggle="tab" href="#did">DID</a></li>
          <li><a data-toggle="tab" href="#country">Country</a></li>
          <li><a data-toggle="tab" href="#sms">SMS</a></li>
          <li><a data-toggle="tab" href="#code_name">Code Name</a></li>
          <li><a data-toggle="tab" href="#profitability_support">Profitability Support</a></li>
        </ul>
        <div class="tab-content">
          <div id="Subscriber" class="tab-pane fade in active">
            <h3>HOME</h3>
            <p>Some content</p>
          </div>
          <div id="did" class="tab-pane fade">
            <h3>DID</h3>
            <p>Some content</p>
          </div>
          <div id="country" class="tab-pane fade">
            <h3>Country</h3>
            <p>Some content</p>
          </div>
          <div id="sms" class="tab-pane fade">
            <h3>SMS</h3>
            <p>Some content</p>
          </div>
          <div id="code_name" class="tab-pane fade">
            <h3>Code Name</h3>
            <p>Some content</p>
          </div>
          <div id="profitability_support" class="tab-pane fade">
            <h3>Profitability Support</h3>
            <p>Some content</p>
          </div>          
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import {payments} from '../../demo'
// import $ from 'jquery'

// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Report',
  data () {
    return {
      payments
    }
  },
  mounted () {
    this.$nextTick(() => {
      // $('#example1').DataTable()
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

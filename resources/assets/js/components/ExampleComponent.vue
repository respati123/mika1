





<template>
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Customer Lists</h3>

            <div class="box-tools pull-right">
                <button type="button" class="btn bg-orange margin" data-toggle="modal" data-target="#modal-default">Create Customer Lists</button>
            </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="box-body table-responsive">
                <table id="datatables" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Customer List</th>
                            <th>Vehicle Of Lists</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="col-xs-12 user-panel">
                                    <div class="row">
                                        <div class="col-md-2 align-content-md-center">
                                            <img src="img/person.png" class="img-circle img-responsive w-auto" alt="person.png">
                                        </div>
                                        <div class="col-md-10">
                                            <div class="user-panel info">
                                                <h4>Respati Tri Susetyo</h4>
                                                <p>+081290265790 | <i><a href="#">tyorespati@gmail.com</a></i></p>
                                                <p><i>Registered :</i> 20 April 2018    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-default">
                                  <i class="fa fa-car">
                                    &nbsp<span class="label label-success"> 11</span>
                                  </i>
                                </button>
                            </td>
                            <td>
                              <button type="button" class="btn btn-warning" name="button"><i class="fa fa-edit"></i> Edit</button> &nbsp
                              <button type="button" class="btn btn-danger" name="button"><i class="fa fa-times"></i>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

        <!-- modal default -->
        <div class="modal fade bs-example-modal-lg" id="modal-default" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Default Modal</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="inputName" class="col-sm-2 control-label">Name</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputName" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                                    <div class="col-sm-10">
                                        <input type="Email" class="form-control" id="inputEmail" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPhoneNumber" class="col-sm-2 control-label">Phone Number</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control"  id="inputPhoneNumber" data-inputmask="'mask:(999) 999-9999'" data-mask="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="inputImage" class="col-sm-2 control-label">Image Input</label>
                                    <div class="col-sm-10">
                                        <input type="file" id="inputImage">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputVehicleType" class="col-sm-2 control-label">Vehicles</label>
                                    <div class="col-sm-10">
                                        <div class="col-sm-6" style="padding-left: 0;">
                                            <div class="input-group">
                                                <span class="input-group-addon">Type</span>
                                                <select name="inputVehicleType" class="form-control input-group" id="inputVehicleType">
                                                    <option value="1">mercedes</option>
                                                    <option value="1">BMW</option>
                                                    <option value="1">BAJAJ</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div class="col-sm-6" style="padding-left: 0;">
                                            <div class="input-group">
                                                <span class="input-group-addon">Plat</span>
                                                <input type="text" class="form-control input-group" >
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-10 col-sm-offset-2">
                                        <button class="btn btn-default">+add</button>
                                    </div>
                                </div>

                            </div>
                            <!-- /.box-body -->
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.box-body -->
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

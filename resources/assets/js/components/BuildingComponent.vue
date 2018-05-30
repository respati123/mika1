<template>
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Buildings List</h3>

            <div class="box-title pull-right">
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-loyalty">Create New Building</button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="box-body table-responsive">
                <table id="datatables" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Building List</th>
                        <th>Unit</th>
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
                                            <blockquote>
                                                <h4 class="text-uppercase"><b>Pusat Perbelanjaan</b></h4>
                                                <i><b>Perkantoran</b></i>
                                                <footer>
                                                  <address>Jln. H. R. Rasuna Said No.62, Karet Kuningan, Setiabudi, Jakarta Selatan 12920</address>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                          <ul class="list-group">
                            <li class="list-group-item">
                              <b>Regular</b> <a class="pull-right">1,322 lots</a>
                            </li>
                            <li class="list-group-item">
                              <b>VIP</b> <a class="pull-right">543 lots</a>
                            </li>
                            <li class="list-group-item">
                              <b>VVIP</b> <a class="pull-right">13,287 lots</a>
                            </li>
                          </ul>
                        </td>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class="btn btn-warning">Edit</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <!-- /.box-body -->
        <div class="modal fade bs-example-modal-lg" id="modal-loyalty" style="display: none;">
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
                                    <label for="inputBuildingName" class="col-sm-2 control-label">Building Name</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputBuildingName" placeholder="Building Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputCategories" class="col-sm-2 control-label">Category</label>

                                    <div class="col-sm-10">
                                        <select class="form-control" name="inputCategories">
                                          <option value="">Perkantoran</option>
                                          <option value="">Perbelanjaan</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress" class="col-sm-2 control-label">Address</label>

                                    <div class="col-sm-10">
                                        <textarea class="form-control"
                                         name="Address" id="inputAddress" rows="8" cols="80" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputImage" class="col-sm-2 control-label">Image Input</label>
                                    <div class="col-sm-10">
                                        <input type="file" id="inputImage">
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
    </div>



</template>

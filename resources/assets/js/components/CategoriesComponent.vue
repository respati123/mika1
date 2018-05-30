<template>
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Loyaly Programs</h3>

            <div class="box-title pull-right">
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-loyalty">Create New Category</button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="box-body table-responsive">
                <table id="datatables" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Categories List</th
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
                                                <p class="text-uppercase"><b>Pusat Perbelanjaan</b></p>
                                                <footer>Mall Arion, Mall Ambassador, Mall Taman Anggrek</footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <label for="inputNameCategories" class="col-sm-2 control-label">Category</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputNameCategories" placeholder="Category">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputDesc" class="col-sm-2 control-label">description</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputDesc" placeholder="description">
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

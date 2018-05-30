<template>
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Loyaly Programs</h3>

            <div class="box-title pull-right">
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-loyalty">Create Customer Lists</button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="box-body table-responsive">
                <table id="datatables" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Location List</th>
                        <th>Location Detail</th>
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
                                                <p class="text-uppercase"><b>Jakarta</b></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <b>Jakarta Timur</b>
                                    <span class="pull-right">
                                        <a href="" class="re-btn-list-group">delete</a> | <a class="re-btn-list-group">edit</a>
                                    </span>
                                </li>
                                <li class="list-group-item">
                                    <b>Jakarta Barat</b>
                                    <span class="pull-right">
                                        <a href="" class="re-btn-list-group">delete</a> | <a class="re-btn-list-group">edit</a>
                                    </span>
                                </li>
                                <li class="list-group-item">
                                    <b>Jakarta Barat</b>
                                    <span class="pull-right">
                                        <a href="" class="re-btn-list-group">delete</a> | <a class="re-btn-list-group">edit</a>
                                    </span>
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
                                    <label for="inputLocation" class="col-sm-2 control-label">Location</label>

                                    <div class="col-sm-10">
                                        <select name="" id="" class="form-control">
                                            <option value="">DKI Jakarta</option>
                                            <option value="">Jawa Barat</option>
                                            <option value="">Jawa Timur</option>
                                            <option value="">Jawa Tengah</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputDetail" class="col-sm-2 control-label">Location Detail</label>

                                    <div class="col-sm-10">
                                        <select name="" id="inputDetail" class="form-control">
                                            <option value="">DKI Jakarta</option>
                                            <option value="">Jakarta Timur</option>
                                            <option value="">Jakarta Barat</option>
                                            <option value="">Jakarta Tengah</option>
                                        </select>
                                    </div>
                                </div>u
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

<script>
    export default {
        name: "LocationsComponent"
    }
</script>

<style scoped>

</style>
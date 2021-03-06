﻿function loadList(page, pageSize) {
    var params = {
        Page: page,
        pageSize: pageSize

    }

    var loading = $("#tbody").setLoading();

    $.ajax({
        method: "post",
        url: mapPath + "/Dashboard/Searchlog",
        data: JSON.stringify(params)

    }).done(function (data) {
        loading.stop();
        $("#tbody").html(data);
    });
}

function showException(id) {
    $.ajax({
        method: "post",
        url: mapPath + "/Dashboard/GetException",
        data: JSON.stringify({ id: id })
    }).done(function (data) {

        $("#tbody").append('<div class="modal fade" id="' + id + '"> ' +
            '<div class= "modal-dialog" role = "document">' +
            '<div class="modal-content" style="width:1068px;">' +
            '<div class="modal-header bg-danger border-0">' +
            '<h5 class="modal-title text-white">Exception</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body p-5">' +
            '' + data + '</div>' +
            '</div>' +
            '</div >' +
            '</div >');

        $('#' + id).modal().css({
            "padding-right": "19%"
        });
    });
}

function logInfo(id) {
    $.ajax({
        method:"post",
        url: mapPath + "/Dashboard/LogInfo",
        data: JSON.stringify({ id: id })
    }).done(function(data) {
        $("#content").html(data);
    });
}
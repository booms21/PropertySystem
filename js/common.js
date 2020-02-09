const Host = "192.168.1.5:4535"; //服务器地址端口



function getvisitorSignList(data) {//遍历来客访问列表

  $(".oLitem").remove(); //清空数据
  $(".noData").show(); //显示无数据信息
  if (data.length != 0) { //如果有数据

    $(".noData").hide();
    $.each(data, function(idx, obj) { //遍历数据

      items = '<td class="visitorNameTd">' + obj[1] +
        '</td><td>' + obj[2] +
        '</td><td>' + obj[4] +
        '</td><td>' + obj[5] +
        '</td><td>' + obj[3] +
        '	<td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.visitorDel(" + obj[0] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //items="";
    });
  }

}

function getequRepairList(data) {//遍历设备维修数据函数

  $(".oLitem").remove(); //清空数据
  $(".noData").show(); //显示无数据信息
  if (data.length != 0) { //如果有数据

    $(".noData").hide();
    $.each(data, function(idx, obj) { //遍历数据
      repairTime = obj[1] ? obj[1] : '暂无！';
      items = '<td class="repAddressTd">' + obj[2] +
        '</td><td>' + obj[5] +
        '</td><td>' + repairTime +
        '</td><td>' + obj[6] +
        '<td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-sm' onclick=vm.openWin('equRepair'," + obj[3] + "," + obj[0] + ")>修改</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.repDel(" + obj[0] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //items="";
    });
  }

}

function getpropMoneyList(data) {//遍历缴费数据函数
  $(".oLitem").remove(); //清空数据
  $(".noData").show(); //显示无数据信息
  if (data.length != 0) { //如果有数据

    console.log("+++" + data.length);
    $(".noData").hide();
    $.each(data, function(idx, obj) { //遍历数据

      items = '<td class="propAddressTd">' + obj[1] +
        '</td><td>' + obj[2] +
        '</td><td>' + obj[3] +
        '</td><td>' + obj[6] +

        '	<td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-sm' onclick=vm.openWin('propMoney'," + obj[4] + "," + obj[0] + ")>修改</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.propDel(" + obj[4] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //items="";
    });
  }

}

function getuserRoleArr(data) {//遍历角色

  if (data.length != 0) { //如果有数据


    $.each(data, function(idx, obj) { //遍历数据

      items = '<span v-if="userRoleArr" v-for="role in userRoleArr"><i class="layui-icon iconDel" onclick="vm.userDelRole(' + obj[0] + ')">&#x1006;</i>' + obj[1] + '</span>';

      $(".roleDiv").append(items);
      //items="";
    });
  }

}

function getperList(data) {//遍历权限列表

  $(".checkboxItem").remove(); //清空数据
  if (data.length != 0) { //如果有数据


    $.each(data, function(idx, obj) { //遍历数据

      items = '<i class="layui-icon iconAdd" onclick="vm.roleAddPer(' + obj[0] + ')">&#xe618;</i>' +

        '	<span >' + obj[1] + '</span>';


      $(".checkboxDiv").append('<div class="checkboxItem">' + items + '</div>');
      //items="";
    });
  }

}

function getroleListData(data) {//遍历角色列表

  $(".oLitem").remove();
  if (data.length != 0) { //如果有数据

    console.log("+++" + data.length);

    $.each(data, function(idx, obj) { //遍历数据

      items = '	<td class="icon"><i class="layui-icon iconAdd" onclick="vm.userAddRole(' + obj[0] + ')">&#xe618;</i></td><td class="roleNameTd">' + obj[1] +
        '</td><td>' + obj[2] +

        '	</td><td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-sm layui-btn-normal' onclick=vm.tapWin(" + obj[0] + "," + obj[0] + ")>+权限</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.delRole(" + obj[0] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //	items="";
    });
  }



}

function getAdminList(data) {//遍历管理员数据函数
  $(".oLitem").remove(); //清空数据
  $(".noData").show(); //显示无数据信息

  if (data.length != 0) { //如果有数据


    $(".noData").hide();
    $.each(data, function(idx, obj) { //遍历数据

      items = '<td class="userNameTd">' + obj[1] +
        '</td><td>' + obj[2] +
        '</td><td>' + obj[3] +
        '</td><td>' + obj[4] +
        '	<td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-sm' onclick=vm.openWin('reviseUser'," + obj[0] + ")>修改</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-sm layui-btn-normal' onclick=vm.openWin('roleList'," + obj[0] + ")>+角色</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.delUser(" + obj[0] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //items="";
    });
  }
}



function getUserList(data) { //遍历用户数据函数
  $(".oLitem").remove(); //清空数据
  $(".noData").show(); //显示无数据信息
  if (data.length != 0) { //如果有数据

    $(".noData").hide();
    $.each(data, function(idx, obj) { //遍历数据

      items = '<td class="ownerNameTd">' + obj[1] +
        '</td><td>' + obj[3] +
        '</td><td>' + obj[4] +
        '</td><td>' + obj[2] +
        '<td>' + obj[5] + '</td>' +
        '	<td><div class="layui-btn-container">' +
        "<button class='layui-btn layui-btn-radius layui-btn-sm' onclick=vm.openWin('ownerData'," + obj[0] + ")>修改</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-sm layui-btn-normal' onclick=vm.openWin('propMoney'," + obj[0] + ")>缴费</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-sm layui-btn-warm' onclick=vm.openWin('equRepair'," + obj[0] + ")>报修</button>" +
        "<button class='layui-btn layui-btn-radius layui-btn-danger layui-btn-sm' onclick=vm.ownerDel(" + obj[0] + ")>删除</button></div></td>";


      $("#oLlist").append('<tr class="oLitem">' + items + '</tr>');
      //items="";
    });
  }
}



//获取URL参数
function query(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURI(window.location.search).substr(1).match(reg);
  if (r != null) return unescape(r[2]);
};

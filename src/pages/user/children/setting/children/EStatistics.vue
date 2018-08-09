<template>
    <div class="estatistics">
        <table>
            <tr style="background-color:#dddddd">
                <th style="width: 20%;">
                    <div>日期</div>
                </th>
                <th style="width: 15%;">
                    <div>姓名</div>
                </th>
                <th style="width: 12%;">
                    <div>年龄</div>
                </th>
                <th style="width: 25%;">
                    <div>籍贯</div>
                </th>
                <th style="width: 28%;">
                    <div>单位</div>
                </th>
            </tr>
            <tr>
                <td>
                    <div>2018-08-03</div>
                </td>
                <td>
                    <div>彭柳林</div>
                </td>
                <td>
                    <div>30岁</div>
                </td>
                <td>
                    <div class="tl">北京市-北京市-东城区</div>
                </td>
                <td>
                    <div class="tl">天天五金公司</div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:"estatistics"
    }
</script>

<style lang="stylus" scoped>
    table
        width: 100%;
        table-layout: fixed;
        text-align: center;
        background-color: white;
        tr
            th,td
                border: 1px solid #ededed;
                padding:8px 5px;
                &:first-child
                    border-left:none;
                &:last-child
                    border-right:none;
            &:first-child 
                th
                    border-top: none;
            td
                font-size: 12px;

</style>

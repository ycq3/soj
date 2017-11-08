@extends('layouts.admin')
@section('content')
    <div>
        <el-col :md="4">
            <admin-menu class="s-fix"></admin-menu>
        </el-col>
        <el-col :md="20">
            <router-view class="s-fix"></router-view>
        </el-col>
    </div>
@endsection
@push('js')
<script src="{{ asset('ace-builds/src-min/ace.js') }}"></script>
@endpush
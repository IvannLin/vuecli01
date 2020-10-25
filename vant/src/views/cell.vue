<template>
    <div class="cellpay">
        pay
        <van-cell-group>
            <van-cell :border=false title="支付" icon="gold-coin-o" is-link to="/about"/>

            <van-cell title="支付" icon="gold-coin-o" is-link to="/about" >
                <van-icon name="phone-o" slot="right-icon" info="9" color="#1989fa" size="40" tag="span"/>
            </van-cell>

            <van-cell  title="支付" icon="gold-coin-o" is-link to="/about">
                <template slot="right-icon">
                    <van-icon name="phone-o" dot />

                </template>
            </van-cell>


            <van-cell is-link @click="showPopup">展示弹出层</van-cell>
            <van-popup v-model="show">内容</van-popup>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            };
        },

        methods: {
            showPopup() {
                this.show = true;
            },
        },
    }
</script>

<style scoped>
    .cellpay{
        width: 100vw;
        height: 100vh;
        background: lightgray;
    }
</style>
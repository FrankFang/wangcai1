<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";

import { Component, Watch } from "vue-property-decorator";
import { model as recordListModel } from "@/models/recordListModel";
import { model as tagListModel } from "@/models/tagListModel";

const tagList = tagListModel.fetch();

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2: RecordItem = recordListModel.Clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

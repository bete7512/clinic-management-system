<template>
    <div>
        <div id="reciet" ref="root">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="py-3 px-6">Patient name</th>
                        <th class="py-3 px-6"> Health Number</th>
                        <th class="py-3 px-6"> patient ID</th>
                        <th class="py-3 px-6"> date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr> <tr class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">order patient.name</td>
                        <td class="py-4 px-6">order health_num</td>
                        <td class="py-4 px-6">order p_id</td>
                        <td class="py-4 px-6">order queued_at</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="generatepdf">generatepdf</button>
    </div>
</template>
<script setup lang="ts">
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { ref, onMounted } from 'vue';
const root = ref<HTMLElement | null>(null);
// onMounted(() => { console.log(root.value?.innerHTML)});
const generatepdf = () => {
    // window.html2canvas = html2canvas
    console.log("1 well");
    const doc = new jsPDF()
    console.log("2 well");
const html = root.value?.innerHTML;
    doc.fromHTML(html,15,15,{
        width:200,
        font:12
    }
        )
    //     ((pdf) => {
    // console.log("3 well");
    //         pdf.save("name.pdf")
    //     })
    doc.save("output.pdf")
    }

</script>
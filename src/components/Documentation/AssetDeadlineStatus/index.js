import React from 'react';
import { Showcase, EditPageLink, PlainCode, PropsTable } from '../../Common/';
import { AssetDeadlineStatus } from '../../../showcase'
import { MYBIT_UI_NAME, MYBIT_UI_NAME_IMPORT } from '../config'
import { Row, Col } from 'antd'

const EDIT_PAGE_LINK = "/"

const AssetDeadlineStatusPage = () => (
    <div>
    <h1>AssetDeadlineStatus <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>Displays the deadline status of an Asset (MyBit GO)</p>

    <h1>Installation</h1>
    <PlainCode>{`$ yarn add ${MYBIT_UI_NAME}
$ npm install ${MYBIT_UI_NAME}`
}</PlainCode>
    <PlainCode>{`import { AssetDeadlineStatus } from '${MYBIT_UI_NAME_IMPORT}'`}</PlainCode>

    <h1>Examples</h1>
    <Row gutter={16}>
        <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={expiredExample} /></Col>
        <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={activeExample} /></Col>
        <Col span={8} xs={24} sm={24} md={24} lg={12} xl={8}><Showcase data={fundedExample} /></Col>
    </Row>

    <h1>Props</h1>
    <PropsTable data={assetTitleProps} />
</div>
)

export default AssetDeadlineStatusPage

//expired example
const expiredExample = {
    component: (
        <div>
             <AssetDeadlineStatus 
                status={'expired'}
                deadline={new Date(2017, 7, 24, 10, 33, 30)}
            />
        </div>
    ),
    description: (
        <p>Asset deadline with expired status</p>
    ),
    code: `<AssetDeadlineStatus 
    status={'expired'} 
    deadline={new Date(2017, 7, 24, 10, 33, 30)} 
/>`,
    display: 'inline-block'
}

//active example
var future_date = new Date();
future_date.setDate(future_date.getDate() + 22);
future_date.setHours(future_date.getHours() + 6);
const activeExample = {
    component: (
        <div>
            <AssetDeadlineStatus 
                status={'active'}
                deadline={future_date}
            />
        </div>
    ),
    description: (
        <p>Active asset with future deadline date</p>
    ),
    code: `var future_date = new Date();
future_date.setDate(future_date.getDate() + 22);
future_date.setHours(future_date.getHours() + 6);
<AssetDeadlineStatus 
    status={'active'} 
    deadline={future_date} 
/>
    `,
    display: 'inline-block'
}

//funded example
const fundedExample = {
    component: (
        <div>
             <AssetDeadlineStatus 
                status={'funded'}
                deadline={new Date()}
            />
        </div>
    ),
    description: (
        <p>Asset deadline with funded status</p>
    ),
    code: `<AssetDeadlineStatus 
    status={'funded'} 
    deadline={new Date()}
/>`,
    display: 'inline-block'
}

//props data
const assetTitleProps = [{
    key: '1',
    property: 'status',
    description: `the status of the asset`,
    type: 'string: one of expired|active|funded',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'deadline',
    description: 'a past or future deadline for the asset',
    type: 'Date',
    required: 'true',
    default: '-'
}];

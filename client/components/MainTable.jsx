import React from 'react'
import utils from '../utils'

import WeekTable from './WeekTable'
const monthInfo = utils.generateMonthTable()

class MainTable extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <h1>{`${utils.getMonth()} have ${monthInfo.daysOfMonth} days. First day is ${monthInfo.firstDay} `}</h1>        
        <div className="grid-calendar">
          <div className="row calendar-week-header">
            <WeekTable weekday={utils.weekDayArr()}/>
          </div>
          <div className="row calendar-week">
            <div className="col-xs-1 grid-cell previous-month"><div><div><span>31</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>1</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>2</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>3</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>4</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>5</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>6</span></div></div></div>
          </div>

          <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>7</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>8</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>9</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>10</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>11</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>12</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>13</span></div></div></div>
          </div>

          <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>14</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>15</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>16</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>17</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>18</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>19</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>20</span></div></div></div>
          </div>

          <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>21</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>22</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>23</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>24</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>25</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>26</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>27</span></div></div></div>
          </div>

          <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>28</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>29</span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>30</span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>1</span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>2</span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>3</span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>4</span></div></div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainTable
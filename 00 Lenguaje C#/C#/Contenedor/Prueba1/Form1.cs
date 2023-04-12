using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Prueba1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSUMA_Click(object sender, EventArgs e)
        {

            resultado.Text = (Convert.ToInt32(num1.Text) + Convert.ToInt32(num2.Text)).ToString();

            
        }
    }
}
